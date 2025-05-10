import { useEffect, useMemo, useRef } from 'react';
import { useSortingHook } from './hooks/useSortingHook.ts';
import { usePaginationHook } from './hooks/usePaginationHook.ts';
import { useRowSelectionHook } from './hooks/useRowSelectionHook.ts';
import { useFilterHook } from './hooks/useFilterHook.ts';
import { useColumnResizeHook } from './hooks/useColumnResizeHook.ts';
import { useReachToBottomMechanism } from './hooks/useReachToBottomMechanism.ts';
import { useExtractColumnsFromColumnDefs } from './hooks/useExtractColumnsFromColumnDefs.tsx';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableProps } from '../types.ts';

export function useTableLogic<T>(props: TableProps<T>, outerRef?: any) {
  const {
    data: dataRaw,
    columnDefs: columnDefsInput,
    defaultColumn,
    initialPageSize,
    rowSelectionMode = 'none',
    showFooter,
    customTableFooter,
    searchText,
    setSearchText,
    onBottomReached,
  } = props;

  const tableParentRef = useRef<HTMLDivElement>(null);

  const { sortingState, sortingProps } = useSortingHook();
  const { paginationState, paginationProps } = usePaginationHook({ showFooter, initialPageSize, customTableFooter });
  const { rowSelectionState, rowSelectionProps } = useRowSelectionHook({ rowSelectionMode });
  const { filterState, filterProps } = useFilterHook({ setSearchText });
  const { columnsResizeProps } = useColumnResizeHook();
  const { handleBottomReached } = useReachToBottomMechanism({ onBottomReached, tableParentRef });

  const data = useMemo(() => dataRaw, [dataRaw]);
  const { columns } = useExtractColumnsFromColumnDefs({
    columnDefsInput,
    firstRow: data?.at?.(0),
    rowSelectionState,
  });

  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      sorting: sortingState,
      pagination: paginationState,
      rowSelection: rowSelectionState,
      columnFilters: filterState,
      globalFilter: searchText,
    },
    getCoreRowModel: getCoreRowModel(),
    ...sortingProps,
    ...paginationProps,
    ...rowSelectionProps,
    ...filterProps,
    ...columnsResizeProps,
    defaultColumn,
  });

  useEffect(() => {
    if (outerRef) outerRef.current = tableInstance;
  }, []);

  const { getRowModel, getHeaderGroups, getCenterTotalSize } = tableInstance;

  return {
    tableInstance,
    tableParentRef,
    getRowModel,
    getCenterTotalSize,
    getHeaderGroups,
    handleBottomReached,
    paginationState,
  };
}
