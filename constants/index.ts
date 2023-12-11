export const ROUTES = [
  {
    path: '/stations',
    name: 'Station List',
    id: 1,
  },
  {
    path: '/network-overview',
    name: 'Network Map Overview',
    id: 2,
  }
];

export const DEFAULT_POSITION = [51.220460, 4.405174];

export enum MAP_MODE {
  COMPACT,
  DETAILED
}