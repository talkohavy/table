const GAP_TO_BOTTOM = 600;
const CLASSES = {
  tableWrapper: 'tk-custom-table-wrapper',
  tableParentRef: 'tk-table-ref-container',
  table: 'tk-custom-table',
  tableHeaderTHead: 'tk-table-header-thead',
  tableHeaderTR: 'tk-table-header-tr',
  tableHeaderTH: 'tk-table-header-th',
  tableHeaderDivBgPlay: 'tk-table-header-div-bg-play',
  tableHeaderDiv: 'tk-table-header-div',
  tableHeaderValue: 'tk-table-header-div-value',
  tableBodyTR: 'tk-table-body-tr',
  tableBodyTRSelected: 'tk-table-body-tr-selected',
  tableBodyTD: 'tk-table-body-td',
  resizer: 'resizer',
  isResizing: 'isResizing',
};
const ROW_SELECTION_MODES = {
  single: { enableRowSelection: true, enableMultiRowSelection: false },
  multi: { enableRowSelection: true, enableMultiRowSelection: true },
  none: { enableRowSelection: false },
};

export { CLASSES, GAP_TO_BOTTOM, ROW_SELECTION_MODES };
