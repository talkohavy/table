import { ReactNode } from 'react';
import { AccessorKeyColumnDef, ColumnDef } from '@tanstack/react-table';
import { DefaultColumn } from './types';
type TableProps<T = any> = {
    data: Array<T>;
    columnDefs?: Array<ColumnDef<T> | AccessorKeyColumnDef<any, any>>;
    defaultColumn?: DefaultColumn;
    rowSelectionMode?: 'none' | 'single' | 'multi';
    searchText?: string;
    onCellClick?: (props: {
        cell: any;
        row: any;
    }) => any;
    setSearchText?: (value: any) => void;
    customTableFooter?: (props: any) => ReactNode;
    onBottomReached?: () => void;
    className?: string;
    initialPageSize?: number;
    /**
     * @default false
     */
    showFooter?: boolean;
    /**
     * @default true
     */
    isFullSize?: boolean;
};
declare const Table: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<TableProps<unknown> & import("react").RefAttributes<unknown>>>;
export default Table;
