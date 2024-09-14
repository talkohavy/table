import { ReactNode, forwardRef, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { useVirtual } from 'react-virtual';
import { AccessorKeyColumnDef, ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableFooter } from '../../main';
import { CLASSES, GAP_TO_BOTTOM } from './logic/constants';
import { useExtractColumnsFromColumnDefs } from './logic/helpers/hooks/useExtractColumnsFromColumnDefs';
import { useFilterHook } from './logic/helpers/hooks/useFilterHook';
import { usePaginationHook } from './logic/helpers/hooks/usePaginationHook';
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

  const tableParentRef = useRef(null);

  const { sortingState, sortingProps } = useSortingHook();
  const { paginationState, paginationProps } = usePaginationHook({ showFooter, initialPageSize, customTableFooter });
  const { rowSelectionState, rowSelectionProps } = useRowSelectionHook({ rowSelectionMode });
  const { filterState, filterProps } = useFilterHook({ setSearchText });

  const data = useMemo(() => dataRaw, [dataRaw]);
  const { columns } = useExtractColumnsFromColumnDefs({
    columnDefsInput,
    firstRow: data?.at?.(0),
    rowSelectionState,
  });

  const handleBottomReached = useCallback(
    (containerRefElement: any) => {
      if (containerRefElement && onBottomReached) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        const isCloseToBottom = scrollHeight - scrollTop - clientHeight < GAP_TO_BOTTOM;

        if (isCloseToBottom) onBottomReached();
      }
    },
    [onBottomReached],
  );

  // A check on mount and after a fetch to see if the table is already scrolled to the bottom. Common use case is to fetch more data.
  useEffect(() => {
    handleBottomReached(tableParentRef.current);
  }, [handleBottomReached]);

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

  const { rows } = getRowModel();

  // Calculate virtual gaps:
  const rowVirtualizer = useVirtual({ parentRef: tableParentRef, size: rows.length, overscan: 10 });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const virtualPaddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0;

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e) => handleBottomReached(e.target) : undefined}
        className={clsx(CLASSES.tableParentRef, styles.tableParentRef)}
        ref={tableParentRef}
      >
        <table className={clsx(CLASSES.table, styles.table)}>
          <TableHeader tableInstance={tableInstance} getHeaderGroups={getHeaderGroups} />

          <TableBody
            rows={rows}
            virtualRows={virtualRows}
            virtualPaddingTop={virtualPaddingTop}
            virtualPaddingBottom={virtualPaddingBottom}
            onCellClick={onCellClick}
          />
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
