import { lazy } from 'react';

const SimpleTablePage = lazy(() => import('./pages/SimpleTablePage'));
const RowSelectionTablePage = lazy(() => import('./pages/RowSelectionTablePage'));
const TableWithFooterPage = lazy(() => import('./pages/TableWithFooterPage'));

export const routes = [
  // Leave this as the first, since it will serve as the homepage
  {
    to: '/simple-table',
    text: 'Simple Table',
    activeNames: ['/simple-table', '/'],
    Component: SimpleTablePage,
  },
  {
    to: '/row-selection-table',
    text: 'Row Selection Table',
    activeNames: ['/row-selection-table'],
    Component: RowSelectionTablePage,
  },
  {
    to: '/table-with-footer',
    text: 'Table With Footer',
    activeNames: ['/table-with-footer'],
    Component: TableWithFooterPage,
  },
];
