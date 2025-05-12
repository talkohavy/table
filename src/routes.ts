import { lazy } from 'react';

const SimpleTablePage = lazy(() => import('./pages/SimpleTablePage'));
const TableWithCustomColumns = lazy(() => import('./pages/TableWithCustomColumns'));
const RowSelectionTablePage = lazy(() => import('./pages/RowSelectionTablePage'));
const TableWithFooterPage = lazy(() => import('./pages/TableWithFooterPage'));
const TableWithSorting = lazy(() => import('./pages/TableWithSorting'));
const ComplexTablePage = lazy(() => import('./pages/ComplexTablePage'));

export const routes = [
  // Leave this as the first, since it will serve as the homepage
  {
    to: '/simple-table',
    text: 'Simple Table',
    activeNames: ['/simple-table', '/'],
    Component: SimpleTablePage,
  },
  {
    to: '/table-with-custom-columns',
    text: 'Table With Custom Columns',
    activeNames: ['/table-with-custom-columns'],
    Component: TableWithCustomColumns,
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
  {
    to: '/table-with-sorting',
    text: 'Table With Sorting',
    activeNames: ['/table-with-sorting'],
    Component: TableWithSorting,
  },
  {
    to: '/complex-table',
    text: 'Complex Table',
    activeNames: ['/complex-table'],
    Component: ComplexTablePage,
  },
];
