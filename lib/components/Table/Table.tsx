import { ReactNode, forwardRef, memo, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { AccessorKeyColumnDef, ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableFooter } from '../../main';
import { CLASSES } from './logic/constants';
import { useExtractColumnsFromColumnDefs } from './logic/helpers/hooks/useExtractColumnsFromColumnDefs';
import { useFilterHook } from './logic/helpers/hooks/useFilterHook';
import { usePaginationHook } from './logic/helpers/hooks/usePaginationHook';
import { useReachToBottomMechanism } from './logic/helpers/hooks/useReachToBottomMechanism';
import { useRowSelectionHook } from './logic/helpers/hooks/useRowSelectionHook';
import { useSortingHook } from './logic/helpers/hooks/useSortingHook';
import TableBody from './logic/helpers/TableBody';
import TableHeader from './logic/helpers/TableHeader';
import styles from './Table.module.scss';
import { DefaultColumn } from './types';

type TableProps<T = any> = {
  data: Array<T>;
  columnDefs?: Array<ColumnDef<T> | AccessorKeyColumnDef<any, any>>;
  defaultColumn?: DefaultColumn;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  searchText?: string;
  onCellClick?: (props: { cell: any; row: any }) => any;
  setSearchText?: (value: any) => void;
  customTableFooter?: (props: any) => ReactNode;
  onBottomReached?: () => void;
  className?: string;
  initialPageSize?: number;
  /**
   * @default false
   */
  showFooter?: boolean;
};

function TableToForwardAndMemo<T>(props: TableProps<T>, outerRef: any) {
  const {
    data: dataRaw,
    columnDefs: columnDefsInput,
    defaultColumn,
    rowSelectionMode = 'none',
    searchText,
    setSearchText,
    customTableFooter,
    onCellClick,
    onBottomReached,
    initialPageSize,
    showFooter,
    className,
  } = props;

  const tableParentRef = useRef<HTMLDivElement>(null);

  const { sortingState, sortingProps } = useSortingHook();
  const { paginationState, paginationProps } = usePaginationHook({ showFooter, initialPageSize, customTableFooter });
  const { rowSelectionState, rowSelectionProps } = useRowSelectionHook({ rowSelectionMode });
  const { filterState, filterProps } = useFilterHook({ setSearchText });
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
    columnResizeMode: 'onChange',
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
    defaultColumn,
    // pageCount: 10, // <--- you can hard code your last page number here! Great for dynamic data-fetching tables.
  });

  if (outerRef) outerRef.current = tableInstance;

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e: any) => handleBottomReached(e.target) : undefined}
        className={clsx(CLASSES.tableParentRef, styles.tableParentRef)}
        ref={tableParentRef}
      >
        <table className={clsx(CLASSES.table, styles.table)}>
          <TableHeader getHeaderGroups={getHeaderGroups} tableInstance={tableInstance} />

          <TableBody getRowModel={getRowModel} onCellClick={onCellClick} tableParentRef={tableParentRef} />
        </table>
      </div>

      {showFooter ? (
        <TableFooter {...tableInstance} {...paginationState} />
      ) : (
        customTableFooter?.({ ...tableInstance, ...paginationState })
      )}
    </div>
  );
}

const Table = memo(forwardRef(TableToForwardAndMemo));

export default Table;
