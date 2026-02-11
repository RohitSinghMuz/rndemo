export type TrendType = 'up' | 'down';

export interface SalesItemType {
  id: string;
  title: string;
  percent: number;
  trend: TrendType;
  color: string;
  target: string;
  achievement: string;
  balance: string;
  pickup: string;
  l3mAvg: string;
}
