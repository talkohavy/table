import { lazy } from 'react';

const SimpleTablePage = lazy(() => import('./pages/SimpleTablePage'));

export const routes = [
  // Leave this as the first, since it will serve as the homepage
  {
    to: '/simple-table',
    text: 'Simple Table',
    activeNames: ['/simple-table', '/'],
    Component: SimpleTablePage,
  },
];
