import { useState } from 'react';
import { ColumnFiltersState, getFilteredRowModel } from '@tanstack/react-table';

type UseFilterHookProps = {
  setSearchText?: (props: any) => void;
};

function useFilterHook(props: UseFilterHookProps) {
  const { setSearchText } = props;

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  return {
    filterState: columnFilters,
    filterProps: {
      getFilteredRowModel: getFilteredRowModel(),
      onGlobalFilterChange: setSearchText,
      onColumnFiltersChange: setColumnFilters,
      enableGlobalFilter: true,
      enableColumnFilters: true,
    },
  };
}

export { useFilterHook };
