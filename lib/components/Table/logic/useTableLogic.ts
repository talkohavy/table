import { useEffect, useMemo, useRef } from 'react';
import { getCoreRowModel, Table, useReactTable } from '@tanstack/react-table';
import { TableProps } from '../types.ts';
import { RowSelectionMode } from './constants.ts';
import { useColumnOrder } from './hooks/useColumnOrder.ts';
import { useColumnResizeHook } from './hooks/useColumnResizeHook.ts';
import { useColumnVisibility } from './hooks/useColumnVisibility.ts';
import { useExtractColumnsFromColumnDefs } from './hooks/useExtractColumnsFromColumnDefs';
import { useFilterHook } from './hooks/useFilterHook.ts';
import { usePaginationHook } from './hooks/usePaginationHook.ts';
import { useReachToBottomMechanism } from './hooks/useReachToBottomMechanism.ts';
import { useRowPinning } from './hooks/useRowPinning.ts';
import { useRowSelectionHook } from './hooks/useRowSelectionHook.ts';
import { useSortingHook } from './hooks/useSortingHook.ts';

type RefType = { current: Table<unknown> };

export function useTableLogic<T>(props: TableProps<T>, outerRef?: RefType) {
  const {
    data: dataRaw,
    columnDefs: columnDefsInput,
    defaultColumn,
    initialPageSize,
    rowSelectionMode = RowSelectionMode.None,
    showFooter,
    customTableFooter,
    visibleColumns,
    onVisibleColumnsChange,
    searchText,
    setSearchText,
    initialColumnOrder,
    onColumnsOrderChange,
    onBottomReached,
    defaultColumnOrder: customDefaultColumnOrder,
    allowColumnResizing,
    initialColumnSizing,
    onColumnSizingChange,
  } = props;

  const tableParentRef = useRef<HTMLDivElement>(null);

  const { sortingState, sortingProps } = useSortingHook();
  const { paginationState, paginationProps } = usePaginationHook({ showFooter, initialPageSize, customTableFooter });
  const { rowSelectionState, rowSelectionProps } = useRowSelectionHook({ rowSelectionMode });
  const { filterState, filterProps } = useFilterHook({ setSearchText });
  const { columnSizingState, columnsResizeProps } = useColumnResizeHook({
    allowColumnResizing,
    initialColumnSizing,
    onColumnSizingChange,
  });
  const { columnVisibilityState, columnVisibilityProps } = useColumnVisibility({
    initialState: visibleColumns,
    onVisibleColumnsChange,
  });
  const { rowPinningState, rowPinningProps } = useRowPinning();

  const data = useMemo(() => dataRaw, [dataRaw]);

  const { columns } = useExtractColumnsFromColumnDefs({
    columnDefsInput,
    firstRow: data?.at?.(0),
    rowSelectionState,
    rowSelectionMode,
  });

  const { columnOrderState, columnOrderProps, defaultColumnOrder } = useColumnOrder({
    initialColumnOrder,
    customDefaultColumnOrder,
    onColumnsOrderChange,
    columns,
  });

  const { handleBottomReached } = useReachToBottomMechanism({ onBottomReached, tableParentRef });

  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      sorting: sortingState,
      pagination: paginationState,
      rowSelection: rowSelectionState,
      columnFilters: filterState,
      globalFilter: searchText,
      columnVisibility: columnVisibilityState,
      columnOrder: columnOrderState,
      columnSizing: columnSizingState,
      rowPinning: rowPinningState,
    },
    getCoreRowModel: getCoreRowModel(),
    ...sortingProps,
    ...paginationProps,
    ...rowSelectionProps,
    ...filterProps,
    ...columnsResizeProps,
    ...columnVisibilityProps,
    ...columnOrderProps,
    ...rowPinningProps,
    defaultColumn,
  });

  useEffect(() => {
    // eslint-disable-next-line
    if (outerRef) outerRef.current = tableInstance;
  }, []);

  const { getRowModel, getTopRows, getCenterRows, getBottomRows, getHeaderGroups, getCenterTotalSize } = tableInstance;

  return {
    tableInstance,
    tableParentRef,
    getRowModel,
    getTopRows,
    getBottomRows,
    getCenterRows,
    getCenterTotalSize,
    getHeaderGroups,
    handleBottomReached,
    paginationState,
    defaultColumnOrder,
    columnSizingState,
  };
}
