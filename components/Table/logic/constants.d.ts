declare const GAP_TO_BOTTOM = 600;
declare const CLASSES: {
    tableWrapper: string;
    tableParentRef: string;
    table: string;
    tableHeaderTHead: string;
    tableHeaderTR: string;
    tableHeaderTH: string;
    tableHeaderDiv: string;
    tableHeaderValue: string;
    tableBodyTR: string;
    tableBodyTRSelected: string;
    tableBodyTD: string;
    tableFooterSelect: string;
    resizer: string;
    tableColumnIsResizing: string;
};
declare enum RowSelectionOptions {
    Single = "single",
    Multi = "multi",
    None = "none"
}
declare const ROW_SELECTION_MODES: Record<RowSelectionOptions, any>;
declare const DEFAULT_PAGE_SIZE = 10;
export { CLASSES, DEFAULT_PAGE_SIZE, GAP_TO_BOTTOM, ROW_SELECTION_MODES, RowSelectionOptions };
