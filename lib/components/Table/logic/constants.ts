export const GAP_TO_BOTTOM = 600;

export const CLASSES = {
  tableWrapper: 'tk-custom-table-wrapper',
  tableParentRef: 'tk-table-ref-container',
  table: 'tk-table',
  tableHeaderTHead: 'tk-table-header-thead',
  tableHeaderTR: 'tk-table-header-tr',
  tableHeaderTH: 'tk-table-header-th',
  tableHeaderDiv: 'tk-table-header-div',
  tableHeaderValue: 'tk-table-header-div-value',
  tableBody: 'tk-table-body',
  tableBodyTR: 'tk-table-body-tr',
  tableBodyTRSelected: 'tk-table-body-tr-selected',
  tableBodyTD: 'tk-table-body-td',
  tableFooterSelect: 'tk-table-footer-select',
  resizer: 'resizer',
  tableColumnIsResizing: 'tk-table-column-is-resizing',
};

export enum RowSelectionMode {
  Single = 'single',
  Multi = 'multi',
  None = 'none',
}

export const ROW_SELECTION_MODES: Record<RowSelectionMode, any> = {
  [RowSelectionMode.Single]: { enableRowSelection: true, enableMultiRowSelection: false },
  [RowSelectionMode.Multi]: { enableRowSelection: true, enableMultiRowSelection: true },
  [RowSelectionMode.None]: { enableRowSelection: false },
};

export const DEFAULT_PAGE_SIZE = 10;
