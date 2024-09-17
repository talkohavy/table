import { RowModel } from '@tanstack/react-table';
type TableBodyProps = {
    getRowModel: () => RowModel<any>;
    onCellClick?: (props: {
        cell: any;
        row: any;
    }) => any;
    tableParentRef: any;
};
export default function TableBody(props: TableBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
