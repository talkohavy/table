import { ReactNode } from 'react';
type UsePaginationHookProps = {
    showFooter?: boolean;
    customTableFooter?: (props: any) => ReactNode;
    initialPageSize?: number;
};
declare function usePaginationHook(props: UsePaginationHookProps): {
    paginationState: {
        pageIndex: number;
        pageSize: number;
    };
    paginationProps: {
        getPaginationRowModel: (table: import("@tanstack/react-table").Table<unknown>) => () => import("@tanstack/react-table").RowModel<unknown>;
        onPaginationChange: import("react").Dispatch<import("react").SetStateAction<{
            pageIndex: number;
            pageSize: number;
        }>>;
        autoResetPageIndex: boolean;
    };
};
export { usePaginationHook };
