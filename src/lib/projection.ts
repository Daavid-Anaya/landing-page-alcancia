/**
 * Savings calculator of the landing page. Amounts are integer cents, never floats.
 * The assumptions are examples shared with the demo site (`sitio-web/src/domain/projection.ts`),
 * not backtest results (RN-13). The outcome is always a range (RN-14).
 */
export const ASSUMPTIONS = {
  lowGrossAnnualReturnPercent: 2,
  highGrossAnnualReturnPercent: 6,
  /** RN-23: annual fund fee over the balance. */
  fundAnnualFeePercent: 0.53,
  retirementAge: 65,
  minimumAge: 18,
  /** RN-02: minimum contribution, $50 pesos. */
  minimumContributionMxnCents: 5_000,
  /** Example exchange rate used to turn pesos into dollars and back (RN-06). */
  mxnPerUsd: 18.45,
} as const;

export const FREQUENCY = {
  WEEKLY: 'weekly',
  BIWEEKLY: 'biweekly',
  MONTHLY: 'monthly',
} as const;

export type Frequency = (typeof FREQUENCY)[keyof typeof FREQUENCY];

const CHARGES_PER_YEAR: Record<Frequency, number> = {
  [FREQUENCY.WEEKLY]: 52,
  [FREQUENCY.BIWEEKLY]: 26,
  [FREQUENCY.MONTHLY]: 12,
};

export const ESTIMATE_ERROR = {
  INVALID_AMOUNT: 'invalid_amount',
  BELOW_MINIMUM: 'below_minimum',
  INVALID_AGE: 'invalid_age',
} as const;

export type EstimateError = (typeof ESTIMATE_ERROR)[keyof typeof ESTIMATE_ERROR];

export interface EstimateInput {
  /** What the visitor would save each time, in pesos. */
  readonly amountMxnCents: number;
  readonly frequency: Frequency;
  readonly currentAge: number;
}

export interface Estimate {
  /** Years from today to the retirement age. */
  readonly years: number;
  readonly perChargeUsdCents: number;
  readonly annualContributionUsdCents: number;
  readonly lowUsdCents: number;
  readonly highUsdCents: number;
  readonly lowMxnCents: number;
  readonly highMxnCents: number;
}

export interface EstimateSuccess {
  readonly ok: true;
  readonly estimate: Estimate;
}

export interface EstimateFailure {
  readonly ok: false;
  readonly error: EstimateError;
}

export type EstimateResult = EstimateSuccess | EstimateFailure;

/** Balance after `years`, adding the contribution at the end of each year, net of the fund fee. */
export function projectBalanceCents(annualContributionCents: number, years: number, grossReturnPercent: number): number {
  const netRate = (grossReturnPercent - ASSUMPTIONS.fundAnnualFeePercent) / 100;
  let balance = 0;
  for (let year = 0; year < years; year += 1) {
    balance = balance * (1 + netRate) + annualContributionCents;
  }
  return Math.round(balance);
}

/** RN-23: what the fund fee costs in a year, in money. */
export function annualFundFeeCents(balanceCents: number): number {
  return Math.round((balanceCents * ASSUMPTIONS.fundAnnualFeePercent) / 100);
}

function isValidAge(age: number): boolean {
  return Number.isInteger(age) && age >= ASSUMPTIONS.minimumAge && age < ASSUMPTIONS.retirementAge;
}

/** Turns a regular saving in pesos into the range the visitor could have at 65. */
export function estimateSaving(input: EstimateInput): EstimateResult {
  if (!Number.isFinite(input.amountMxnCents) || input.amountMxnCents <= 0) {
    return { ok: false, error: ESTIMATE_ERROR.INVALID_AMOUNT };
  }
  if (input.amountMxnCents < ASSUMPTIONS.minimumContributionMxnCents) {
    return { ok: false, error: ESTIMATE_ERROR.BELOW_MINIMUM };
  }
  if (!isValidAge(input.currentAge)) {
    return { ok: false, error: ESTIMATE_ERROR.INVALID_AGE };
  }

  const years = ASSUMPTIONS.retirementAge - input.currentAge;
  const perChargeUsdCents = Math.round(input.amountMxnCents / ASSUMPTIONS.mxnPerUsd);
  const annualContributionUsdCents = perChargeUsdCents * CHARGES_PER_YEAR[input.frequency];
  const lowUsdCents = projectBalanceCents(annualContributionUsdCents, years, ASSUMPTIONS.lowGrossAnnualReturnPercent);
  const highUsdCents = projectBalanceCents(annualContributionUsdCents, years, ASSUMPTIONS.highGrossAnnualReturnPercent);

  return {
    ok: true,
    estimate: {
      years,
      perChargeUsdCents,
      annualContributionUsdCents,
      lowUsdCents,
      highUsdCents,
      lowMxnCents: Math.round(lowUsdCents * ASSUMPTIONS.mxnPerUsd),
      highMxnCents: Math.round(highUsdCents * ASSUMPTIONS.mxnPerUsd),
    },
  };
}
