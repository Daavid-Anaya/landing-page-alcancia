import { gsap } from 'gsap';
import {
  ESTIMATE_ERROR,
  FREQUENCY,
  estimateSaving,
  type Estimate,
  type EstimateError,
  type Frequency,
} from '../lib/projection';

/** Interactive part of the savings calculator. The first range is rendered by `Calculator.astro`. */

const ERROR_MESSAGE: Record<EstimateError, string> = {
  [ESTIMATE_ERROR.INVALID_AMOUNT]: 'Escribe cuánto ahorrarías, por ejemplo 500.',
  [ESTIMATE_ERROR.BELOW_MINIMUM]: 'El mínimo para aportar es $50 pesos.',
  [ESTIMATE_ERROR.INVALID_AGE]: 'Escribe tu edad, entre 18 y 64 años.',
};

const OUTPUT_KEYS = ['lowMxn', 'highMxn', 'lowUsd', 'highUsd'] as const;

type OutputKey = (typeof OUTPUT_KEYS)[number];
type Amounts = Record<OutputKey, number>;

const whole = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 });
const money = (units: number) => `$${whole.format(Math.round(units))}`;

function isFrequency(value: unknown): value is Frequency {
  return typeof value === 'string' && (Object.values(FREQUENCY) as string[]).includes(value);
}

function toAmounts(estimate: Estimate): Amounts {
  return {
    lowMxn: estimate.lowMxnCents / 100,
    highMxn: estimate.highMxnCents / 100,
    lowUsd: estimate.lowUsdCents / 100,
    highUsd: estimate.highUsdCents / 100,
  };
}

/** "1,500", "$1500" and "1500.50" are all valid ways to type an amount. */
function parseAmountToCents(raw: string): number {
  const cleaned = raw.replace(/[$,\s]/g, '');
  return cleaned === '' ? Number.NaN : Math.round(Number(cleaned) * 100);
}

function parseAge(raw: string): number {
  const cleaned = raw.trim();
  return cleaned === '' ? Number.NaN : Number(cleaned);
}

function setError(input: HTMLInputElement, box: HTMLElement, message: string): void {
  box.textContent = message;
  box.hidden = message === '';
  if (message === '') input.removeAttribute('aria-invalid');
  else input.setAttribute('aria-invalid', 'true');
}

function initCalculator(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>('[data-calculator-form]');
  const amountInput = root.querySelector<HTMLInputElement>('#calc-amount');
  const ageInput = root.querySelector<HTMLInputElement>('#calc-age');
  const amountError = root.querySelector<HTMLElement>('#calc-amount-error');
  const ageError = root.querySelector<HTMLElement>('#calc-age-error');
  const range = root.querySelector<HTMLElement>('[data-calculator-range]');
  const summary = root.querySelector<HTMLElement>('[data-calculator-summary]');
  const lowBar = root.querySelector<HTMLElement>('[data-bar-low]');
  const outputs = OUTPUT_KEYS.map((key) => root.querySelector<HTMLElement>(`[data-out="${key}"]`));
  if (!form || !amountInput || !ageInput || !amountError || !ageError || !range || !summary || !lowBar) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let shown: Amounts | null = null;

  const paint = (amounts: Amounts) => {
    OUTPUT_KEYS.forEach((key, i) => {
      const output = outputs[i];
      if (output) output.textContent = money(amounts[key]);
    });
  };

  const read = () => {
    const frequency = new FormData(form).get('frequency');
    return estimateSaving({
      amountMxnCents: parseAmountToCents(amountInput.value),
      frequency: isFrequency(frequency) ? frequency : FREQUENCY.BIWEEKLY,
      currentAge: parseAge(ageInput.value),
    });
  };

  /**
   * Errors show when the visitor leaves a field, not on every keystroke.
   * While a value is being fixed, the last valid range stays in view, dimmed.
   */
  const update = (showErrors: boolean) => {
    const result = read();
    range.classList.toggle('is-stale', !result.ok);

    if (!result.ok) {
      if (!showErrors) return;
      const isAgeError = result.error === ESTIMATE_ERROR.INVALID_AGE;
      setError(amountInput, amountError, isAgeError ? '' : ERROR_MESSAGE[result.error]);
      setError(ageInput, ageError, isAgeError ? ERROR_MESSAGE[result.error] : '');
      return;
    }

    setError(amountInput, amountError, '');
    setError(ageInput, ageError, '');

    const target = toAmounts(result.estimate);
    lowBar.style.setProperty('--share', (target.lowUsd / target.highUsd).toFixed(4));
    summary.textContent = `A los 65 años podrías tener entre ${money(target.lowMxn)} y ${money(target.highMxn)} pesos. En dólares, entre ${money(target.lowUsd)} y ${money(target.highUsd)}.`;

    if (reduceMotion || shown === null) {
      shown = { ...target };
      paint(shown);
      return;
    }
    const current = shown;
    gsap.to(current, { ...target, duration: 0.6, ease: 'power2.out', overwrite: true, onUpdate: () => paint(current) });
  };

  form.addEventListener('input', () => update(false));
  form.addEventListener('change', () => update(true));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    update(true);
  });
  update(false);
}

document.querySelectorAll<HTMLElement>('[data-calculator]').forEach(initCalculator);
