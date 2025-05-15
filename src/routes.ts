import { lazy } from 'react';
import { BASE_URL } from './common/constants';
import { Route } from './common/types';

const RedirectToHome = lazy(() => import('./pages/RedirectToHome'));
const SimpleTablePage = lazy(() => import('./pages/SimpleTablePage'));
const TableWithCustomTitles = lazy(() => import('./pages/TableWithCustomTitles'));
const RowSelectionTablePage = lazy(() => import('./pages/RowSelectionTablePage'));
const TableWithFooterPage = lazy(() => import('./pages/TableWithFooterPage'));
const TableWithSorting = lazy(() => import('./pages/TableWithSorting'));
const TableWithColumnsSelector = lazy(() => import('./pages/TableWithColumnsSelector'));
const TableReorderColumns = lazy(() => import('./pages/TableReorderColumns'));
const ComplexTablePage = lazy(() => import('./pages/ComplexTablePage'));

export const routes: Array<Route> = [
  {
    to: '/',
    hideFromSidebar: true,
    Component: RedirectToHome,
  } as Route,
  {
    to: BASE_URL,
    hideFromSidebar: true,
    Component: RedirectToHome,
  } as Route,
  {
    to: `${BASE_URL}/simple-table`,
    text: 'Simple Table',
    activeNames: ['/simple-table', '/'],
    Component: SimpleTablePage,
  },
  {
    to: `${BASE_URL}/table-with-custom-titles`,
    text: 'Table With Custom Titles',
    activeNames: ['/table-with-custom-titles'],
    Component: TableWithCustomTitles,
  },
  {
    to: `${BASE_URL}/row-selection-table`,
    text: 'Row Selection Table',
    activeNames: ['/row-selection-table'],
    Component: RowSelectionTablePage,
  },
  {
    to: `${BASE_URL}/table-with-footer`,
    text: 'Table With Footer',
    activeNames: ['/table-with-footer'],
    Component: TableWithFooterPage,
  },
  {
    to: `${BASE_URL}/table-with-sorting`,
    text: 'Table With Sorting',
    activeNames: ['/table-with-sorting'],
    Component: TableWithSorting,
  },
  {
    to: `${BASE_URL}/table-with-columns-selector`,
    text: 'Table With Columns Selector',
    activeNames: ['/table-with-columns-selector'],
    Component: TableWithColumnsSelector,
  },
  {
    to: `${BASE_URL}/table-reorder-columns`,
    text: 'Table Reorder Columns',
    activeNames: ['/table-reorder-columns'],
    Component: TableReorderColumns,
  },
  {
    to: `${BASE_URL}/complex-table`,
    text: 'Complex Table',
    activeNames: ['/complex-table'],
    Component: ComplexTablePage,
  },
];
