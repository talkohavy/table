import { lazy } from 'react';
import { BASE_URL } from './common/constants';
import { Route } from './common/types';

const RedirectToHome = lazy(() => import('./pages/RedirectToHome'));
const SimpleTablePage = lazy(() => import('./pages/SimpleTablePage'));
const TableWithCustomTitles = lazy(() => import('./pages/TableWithCustomTitles'));
const FullWidthTable = lazy(() => import('./pages/FullWidthTable'));
const TableWithColumnResizing = lazy(() => import('./pages/TableWithColumnResizing'));
const RowSelectionTablePage = lazy(() => import('./pages/RowSelectionTablePage'));
const TableWithFooterPage = lazy(() => import('./pages/TableWithFooterPage'));
const TableWithSorting = lazy(() => import('./pages/TableWithSorting'));
const TableWithColumnsSelector = lazy(() => import('./pages/TableWithColumnsSelector'));
const TableReorderColumns = lazy(() => import('./pages/TableReorderColumns'));
const TableWithPersistentColumnWidths = lazy(() => import('./pages/TableWithPersistentColumnWidths'));
const TableWithPinnedRows = lazy(() => import('./pages/TableWithPinnedRows'));
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
    activeNames: [`${BASE_URL}/simple-table`, `${BASE_URL}/`],
    Component: SimpleTablePage,
  },
  {
    to: `${BASE_URL}/table-with-custom-titles`,
    text: 'Table With Custom Titles',
    activeNames: [`${BASE_URL}/table-with-custom-titles`],
    Component: TableWithCustomTitles,
  },
  {
    to: `${BASE_URL}/full-width-table`,
    text: 'Full Width Table',
    activeNames: [`${BASE_URL}/full-width-table`],
    Component: FullWidthTable,
  },
  {
    to: `${BASE_URL}/table-with-column-resizing`,
    text: 'Table With Column Resizing',
    activeNames: [`${BASE_URL}/table-with-column-resizing`],
    Component: TableWithColumnResizing,
  },
  {
    to: `${BASE_URL}/row-selection-table`,
    text: 'Row Selection Table',
    activeNames: [`${BASE_URL}/row-selection-table`],
    Component: RowSelectionTablePage,
  },
  {
    to: `${BASE_URL}/table-with-footer`,
    text: 'Table With Footer',
    activeNames: [`${BASE_URL}/table-with-footer`],
    Component: TableWithFooterPage,
  },
  {
    to: `${BASE_URL}/table-with-sorting`,
    text: 'Table With Sorting',
    activeNames: [`${BASE_URL}/table-with-sorting`],
    Component: TableWithSorting,
  },
  {
    to: `${BASE_URL}/table-with-columns-selector`,
    text: 'Table With Columns Selector',
    activeNames: [`${BASE_URL}/table-with-columns-selector`],
    Component: TableWithColumnsSelector,
  },
  {
    to: `${BASE_URL}/table-reorder-columns`,
    text: 'Table Reorder Columns',
    activeNames: [`${BASE_URL}/table-reorder-columns`],
    Component: TableReorderColumns,
  },
  {
    to: `${BASE_URL}/table-with-persistent-column-widths`,
    text: 'Persistent Column Widths',
    activeNames: [`${BASE_URL}/table-with-persistent-column-widths`],
    Component: TableWithPersistentColumnWidths,
  },
  {
    to: `${BASE_URL}/table-with-pinned-rows`,
    text: 'Table With Pinned Rows',
    activeNames: [`${BASE_URL}/table-with-pinned-rows`],
    Component: TableWithPinnedRows,
  },
  {
    to: `${BASE_URL}/complex-table`,
    text: 'Complex Table',
    activeNames: [`${BASE_URL}/complex-table`],
    Component: ComplexTablePage,
  },
];
