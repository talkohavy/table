import { Table } from '@tanstack/react-table';
type PaginationProps = Table<any> & {
    pageIndex: number;
    pageSize: number;
};
export default function TableFooter(props: PaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
