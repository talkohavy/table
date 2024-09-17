import { AccessorKeyColumnDef, ColumnDef, RowSelectionState } from '@tanstack/react-table';
type UseExtractColumnsFromColumnDefsProps = {
    columnDefsInput?: Array<AccessorKeyColumnDef<any, any> | ColumnDef<any>>;
    firstRow: any;
    rowSelectionState: RowSelectionState;
};
declare function useExtractColumnsFromColumnDefs(props: UseExtractColumnsFromColumnDefsProps): {
    columns: any;
};
export { useExtractColumnsFromColumnDefs };
