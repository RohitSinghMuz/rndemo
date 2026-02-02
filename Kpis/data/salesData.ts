import { SalesItemType } from "../types/sales";

const salesData: SalesItemType[] = [
  {
    id: '1',
    title: 'NIM Sales',
    percent: 38,
    trend: 'up',
    color: '#1AAE5A',
    target: '36.8 Mio',
    achievement: '13.9 Mio',
    balance: '22.9 Mio',
    pickup: '2%',
    l3mAvg: '15.3 Mio',
  },
  {
    id: '2',
    title: 'F&B Sales',
    percent: 32,
    trend: 'down',
    color: '#C94747',
    target: '36.2 Mio',
    achievement: '10.2 Mio',
    balance: '5.3 Mio',
    pickup: '1%',
    l3mAvg: '15.3 Mio',
  },
];

export default salesData;
