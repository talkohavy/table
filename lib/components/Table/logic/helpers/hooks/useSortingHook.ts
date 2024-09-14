import { useState } from 'react';
import { SortingState, getSortedRowModel } from '@tanstack/react-table';

function useSortingHook() {
  const [sorting, setSorting] = useState<SortingState>();

  return {
    sortingState: sorting,
    sortingProps: {
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: setSorting,
      sortDescFirst: true, // <-- default to false
      enableSorting: true, // <--- defaults to true
      enableMultiSort: false, // <--- defaults to true
      enableMultiRemove: true,
      maxMultiSortColCount: 2,
    },
  };
}

export { useSortingHook };
