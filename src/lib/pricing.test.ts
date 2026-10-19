import { describe, expect, it } from 'vitest';
import { compareFees, planForSpend } from './pricing';

describe('planForSpend', () => {
  it('puts small accounts on Starter', () => {
    expect(planForSpend(8_000)?.name).toBe('Starter');
  });

  it('keeps an account on a plan right up to its spend cap', () => {
    expect(planForSpend(17_500)?.name).toBe('Starter');
  });

  it('moves an account up a plan once spend passes the cap', () => {
    expect(planForSpend(17_501)?.name).toBe('Growth');
  });

  it('puts the largest published band on Scale', () => {
    expect(planForSpend(70_000)?.name).toBe('Scale');
  });

  it('has no published plan above the Scale cap', () => {
    expect(planForSpend(70_001)).toBeUndefined();
  });
});

describe('compareFees', () => {
  it('compares the flat fee with a percentage-of-spend agency', () => {
    const comparison = compareFees({ monthlySpend: 35_000, percentageRate: 0.15 });

    expect(comparison).toEqual({
      plan: expect.objectContaining({ name: 'Growth' }),
      flatFee: 2_610,
      percentageFee: 5_250,
      saving: 2_640,
      flatFeeShareOfSpend: 2_610 / 35_000,
    });
  });

  it('never reports a negative saving when the percentage fee is lower', () => {
    const comparison = compareFees({ monthlySpend: 5_000, percentageRate: 0.15 });

    expect(comparison?.saving).toBe(0);
  });

  it('shrinks the flat fee as a share of spend as spend grows within a plan', () => {
    const smaller = compareFees({ monthlySpend: 20_000, percentageRate: 0.15 });
    const larger = compareFees({ monthlySpend: 35_000, percentageRate: 0.15 });

    expect(larger!.flatFeeShareOfSpend).toBeLessThan(smaller!.flatFeeShareOfSpend);
  });

  it('has nothing to compare above the published plans', () => {
    expect(compareFees({ monthlySpend: 90_000, percentageRate: 0.15 })).toBeUndefined();
  });
});
