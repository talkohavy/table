const GAP_TO_BOTTOM = 600;
const CLASSES = {
  tableWrapper: 'tk-custom-table-wrapper',
  tableParentRef: 'tk-table-ref-container',
  table: 'tk-custom-table',
  tableHeaderTHead: 'tk-table-header-thead',
  tableHeaderTR: 'tk-table-header-tr',
  tableHeaderTH: 'tk-table-header-th',
  tableHeaderDiv: 'tk-table-header-div',
  tableHeaderValue: 'tk-table-header-div-value',
  tableBodyTR: 'tk-table-body-tr',
  tableBodyTRSelected: 'tk-table-body-tr-selected',
  tableBodyTD: 'tk-table-body-td',
  tableFooterSelect: 'tk-table-footer-select',
  resizer: 'resizer',
  tableColumnIsResizing: 'tk-table-column-is-resizing',
};

enum RowSelectionOptions {
  Single = 'single',
  Multi = 'multi',
  None = 'none',
}

const ROW_SELECTION_MODES: Record<RowSelectionOptions, any> = {
  [RowSelectionOptions.Single]: { enableRowSelection: true, enableMultiRowSelection: false },
  [RowSelectionOptions.Multi]: { enableRowSelection: true, enableMultiRowSelection: true },
  [RowSelectionOptions.None]: { enableRowSelection: false },
};

const DEFAULT_PAGE_SIZE = 10;

export { CLASSES, DEFAULT_PAGE_SIZE, GAP_TO_BOTTOM, ROW_SELECTION_MODES, RowSelectionOptions };
