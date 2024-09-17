/// <reference types="react" />
import { ColumnFiltersState } from '@tanstack/react-table';
type UseFilterHookProps = {
    setSearchText?: (props: any) => void;
};
declare function useFilterHook(props: UseFilterHookProps): {
    filterState: ColumnFiltersState;
    filterProps: {
        getFilteredRowModel: (table: import("@tanstack/react-table").Table<unknown>) => () => import("@tanstack/react-table").RowModel<unknown>;
        onGlobalFilterChange: ((props: any) => void) | undefined;
        onColumnFiltersChange: import("react").Dispatch<import("react").SetStateAction<ColumnFiltersState>>;
        enableGlobalFilter: boolean;
        enableColumnFilters: boolean;
    };
};
export { useFilterHook };
