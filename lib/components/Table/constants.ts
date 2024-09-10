const GAP_TO_BOTTOM = 600;
const CLASSES = {
  tableWrapper: 'tk-custom-table-wrapper',
  tableParentRef: 'tk-table-ref-container',
  table: 'tk-custom-table',
  tableHeaderRow: 'tk-table-header-row',
  tableHeaderCell: 'tk-table-header-cell',
  tableHeaderCellValue: 'tk-table-header-cell-value',
  resizer: 'resizer',
  isResizing: 'isResizing',
};
const ROW_SELECTION_MODES = {
  single: { enableRowSelection: true, enableMultiRowSelection: false },
  multi: { enableRowSelection: true, enableMultiRowSelection: true },
  none: { enableRowSelection: false },
};

export { CLASSES, GAP_TO_BOTTOM, ROW_SELECTION_MODES };
