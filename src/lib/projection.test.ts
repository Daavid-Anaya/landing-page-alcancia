import { describe, expect, it } from 'vitest';
import {
  ASSUMPTIONS,
  ESTIMATE_ERROR,
  FREQUENCY,
  annualFundFeeCents,
  estimateSaving,
  projectBalanceCents,
} from './projection';

describe('projectBalanceCents', () => {
  it('adds the yearly contribution at the end of each year', () => {
    expect(projectBalanceCents(65_000, 1, ASSUMPTIONS.lowGrossAnnualReturnPercent)).toBe(65_000);
    expect(projectBalanceCents(65_000, 1, ASSUMPTIONS.highGrossAnnualReturnPercent)).toBe(65_000);
  });

  it('grows the balance net of the fund fee', () => {
    // Low end: 2 % - 0.53 % = 1.47 % a year. High end: 6 % - 0.53 % = 5.47 % a year.
    expect(projectBalanceCents(100_000, 2, ASSUMPTIONS.lowGrossAnnualReturnPercent)).toBe(201_470);
    expect(projectBalanceCents(100_000, 2, ASSUMPTIONS.highGrossAnnualReturnPercent)).toBe(205_470);
  });
});

describe('estimateSaving', () => {
  it('turns a regular saving in pesos into a range in dollars and pesos at 65', () => {
    const result = estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.BIWEEKLY, currentAge: 30 });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // $500 pesos at 18.45 pesos per dollar is $27.10 dollars, 26 times a year.
    expect(result.estimate.perChargeUsdCents).toBe(2_710);
    expect(result.estimate.annualContributionUsdCents).toBe(70_460);
    expect(result.estimate.years).toBe(35);
    expect(result.estimate.lowUsdCents).toBe(projectBalanceCents(70_460, 35, 2));
    expect(result.estimate.highUsdCents).toBe(projectBalanceCents(70_460, 35, 6));
    expect(result.estimate.lowUsdCents).toBeLessThan(result.estimate.highUsdCents);
    expect(result.estimate.lowMxnCents).toBe(Math.round(result.estimate.lowUsdCents * 18.45));
    expect(result.estimate.highMxnCents).toBe(Math.round(result.estimate.highUsdCents * 18.45));
  });

  it('counts 52 weekly and 12 monthly charges a year', () => {
    const weekly = estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.WEEKLY, currentAge: 30 });
    const monthly = estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.MONTHLY, currentAge: 30 });

    expect(weekly.ok && weekly.estimate.annualContributionUsdCents).toBe(2_710 * 52);
    expect(monthly.ok && monthly.estimate.annualContributionUsdCents).toBe(2_710 * 12);
  });

  it('accepts the minimum contribution of $50 pesos and rejects less', () => {
    expect(estimateSaving({ amountMxnCents: 5_000, frequency: FREQUENCY.MONTHLY, currentAge: 30 }).ok).toBe(true);
    expect(estimateSaving({ amountMxnCents: 4_999, frequency: FREQUENCY.MONTHLY, currentAge: 30 })).toEqual({
      ok: false,
      error: ESTIMATE_ERROR.BELOW_MINIMUM,
    });
  });

  it('rejects amounts that are not a positive number', () => {
    for (const amountMxnCents of [0, -100, Number.NaN]) {
      expect(estimateSaving({ amountMxnCents, frequency: FREQUENCY.MONTHLY, currentAge: 30 })).toEqual({
        ok: false,
        error: ESTIMATE_ERROR.INVALID_AMOUNT,
      });
    }
  });

  it('rejects ages outside 18 to 64', () => {
    for (const currentAge of [17, 65, 30.5, Number.NaN]) {
      expect(estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.MONTHLY, currentAge })).toEqual({
        ok: false,
        error: ESTIMATE_ERROR.INVALID_AGE,
      });
    }
    expect(estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.MONTHLY, currentAge: 18 }).ok).toBe(true);
    expect(estimateSaving({ amountMxnCents: 50_000, frequency: FREQUENCY.MONTHLY, currentAge: 64 }).ok).toBe(true);
  });
});

describe('annualFundFeeCents', () => {
  it('is 0.53 % of the balance, rounded to cents', () => {
    expect(annualFundFeeCents(100_000)).toBe(530);
    expect(annualFundFeeCents(0)).toBe(0);
  });
});
