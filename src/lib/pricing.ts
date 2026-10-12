export type Plan = {
  readonly id: 'starter' | 'growth' | 'scale';
  readonly name: string;
  readonly monthlyFee: number;
  readonly spendCap: number;
  readonly meetings: string;
};

export const plans: readonly Plan[] = [
  { id: 'starter', name: 'Starter', monthlyFee: 1_740, spendCap: 17_500, meetings: 'Monthly' },
  { id: 'growth', name: 'Growth', monthlyFee: 2_610, spendCap: 35_000, meetings: 'Fortnightly' },
  { id: 'scale', name: 'Scale', monthlyFee: 3_480, spendCap: 70_000, meetings: 'Weekly' },
];

export const planForSpend = (monthlySpend: number): Plan | undefined =>
  plans.find((plan) => monthlySpend <= plan.spendCap);

export type FeeComparison = {
  readonly plan: Plan;
  readonly flatFee: number;
  readonly percentageFee: number;
  readonly saving: number;
  readonly flatFeeShareOfSpend: number;
};

export const compareFees = ({
  monthlySpend,
  percentageRate,
}: {
  monthlySpend: number;
  percentageRate: number;
}): FeeComparison | undefined => {
  const plan = planForSpend(monthlySpend);
  if (!plan) return undefined;

  const percentageFee = monthlySpend * percentageRate;
  return {
    plan,
    flatFee: plan.monthlyFee,
    percentageFee,
    saving: Math.max(0, percentageFee - plan.monthlyFee),
    flatFeeShareOfSpend: plan.monthlyFee / monthlySpend,
  };
};
