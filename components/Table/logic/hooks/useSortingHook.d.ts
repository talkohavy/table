/// <reference types="react" />
import { SortingState } from '@tanstack/react-table';
declare function useSortingHook(): {
    sortingState: SortingState | undefined;
    sortingProps: {
        getSortedRowModel: (table: import("@tanstack/react-table").Table<unknown>) => () => import("@tanstack/react-table").RowModel<unknown>;
        onSortingChange: import("react").Dispatch<import("react").SetStateAction<SortingState | undefined>>;
        sortDescFirst: boolean;
        enableSorting: boolean;
        enableMultiSort: boolean;
        enableMultiRemove: boolean;
        maxMultiSortColCount: number;
    };
};
export { useSortingHook };
