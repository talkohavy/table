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
  tableBodyTRPinned: 'tk-table-body-tr-pinned',
  tableBodyTD: 'tk-table-body-td',
  tableFooterSelect: 'tk-table-footer-select',
  resizer: 'resizer',
  tableColumnIsResizing: 'tk-table-column-is-resizing',

  columnVisibilitySlider: {
    container: 'tk-column-visibility-slider-container',
    open: 'tk-column-visibility-slider-open',
    content: 'tk-column-visibility-slider-content',
    title: 'tk-column-visibility-slider-title',
    columnList: 'tk-column-visibility-slider-list',
    columnItem: 'tk-column-visibility-slider-item',
    columnLabel: 'tk-column-visibility-slider-label',
    columnCheckbox: 'tk-column-visibility-slider-checkbox',
    columnName: 'tk-column-visibility-slider-name',
    toggleButton: 'tk-column-visibility-slider-toggle',
  },
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
