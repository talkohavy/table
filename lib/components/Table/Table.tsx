import { ReactNode, forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useVirtual } from 'react-virtual';
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { CLASSES, GAP_TO_BOTTOM, ROW_SELECTION_MODES } from './logic/constants';
import ColumnHeader from './logic/helpers/ColumnHeader';
import SpinnerOverlay from './logic/helpers/SpinnerOverlay';
import TableBody from './logic/helpers/TableBody';
import TableHeader from './logic/helpers/TableHeader';
import styles from './Table.module.scss';
import { DefaultColumn, ExtendedColumnDef } from './types';

type TableProps<T = any> = {
  data: Array<T>;
  columnDefs?: Array<ExtendedColumnDef<T>>;
  defaultColumn?: DefaultColumn;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  sorting?: any;
  setSorting?: any;
  searchText?: string;
  onCellClick?: (props: { cell: any; row: any }) => any;
  setSearchText?: (value: any) => void;
  renderTableFooter?: (props: any) => ReactNode;
  onBottomReached?: () => void;
  isFetching?: boolean;
  isLoading?: boolean;
  className?: string;
  totalItemsLoadedCount?: number;
  totalItemsOverallCount?: number;
  initialPageSize?: number;
};

function TableToForward<T>(props: TableProps<T>, ref: any) {
  const {
    data: dataRaw,
    columnDefs,
    defaultColumn,
    rowSelectionMode = 'none',
    searchText,
    setSearchText,
    renderTableFooter,
    onCellClick,
    onBottomReached,
    isFetching,
    isLoading,
    initialPageSize,
    sorting,
    setSorting,
    totalItemsLoadedCount,
    totalItemsOverallCount,
    className,
  } = props;

  const tableParentRef = useRef(null);

  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const data = useMemo(() => dataRaw, [dataRaw]);
  const columns: any = useMemo(() => {
    if (!columnDefs) {
      if (!data.length) return [];

      const [firstRow] = data;
      const autoColumnDefs = [];
      for (const key in firstRow) {
        autoColumnDefs.push({
          accessorKey: key,
          header: (props: any) => <ColumnHeader {...props} header={key} showCheckbox={false} />,
        });
      }

      return autoColumnDefs;
    }

    return columnDefs.map((curItem) => {
      if (curItem.addCheckbox)
        return {
          ...curItem,
          header: (props: any) => <ColumnHeader {...props} {...curItem} header={curItem.header} />,
        };

      return curItem;
    });
  }, [columnDefs]);

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement: any) => {
      if (containerRefElement && onBottomReached) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < GAP_TO_BOTTOM &&
          !isFetching &&
          totalItemsLoadedCount! < totalItemsOverallCount!
        )
          onBottomReached();
      }
    },
    [onBottomReached, isFetching, totalItemsLoadedCount, totalItemsOverallCount],
  );

  // a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableParentRef.current);
  }, [fetchMoreOnBottomReached]);

  // useReactTable:
  const tableInstance = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    autoResetPageIndex: false, // When requesting/fetching a new page with loadMore function, don't reset to page 0 upon successful load!
    state: { sorting, rowSelection, columnFilters, globalFilter: searchText },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearchText,
    onColumnFiltersChange: setColumnFilters,
    enableSorting: true,
    enableMultiSort: true,
    sortDescFirst: false,
    ...ROW_SELECTION_MODES[rowSelectionMode],
    enableGlobalFilter: true,
    enableColumnFilters: true,
    defaultColumn,
    // pageCount: 10, // <--- you can hard code you last page number here!
  });
  ref ??= {};
  ref.current = tableInstance;
  const { getHeaderGroups, getRowModel } = tableInstance;

  useEffect(() => {
    // When loading the table with a custom perPage, change the table's default perPage (which is 10) to the custom one passed.
    // If the page was loaded with infinite scroll mode, initialPageSize will be 0, and so you need to set MAX_SAFE_INTEGER.
    tableInstance.setPageSize(initialPageSize || Number.MAX_SAFE_INTEGER);
  }, []);

  const { rows } = getRowModel();

  // Calculate virtual gaps:
  // NOTE: MUST happen before isLoading returns null! That's why it's not inside TableBody.
  const rowVirtualizer = useVirtual({ parentRef: tableParentRef, size: rows.length, overscan: 10 });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const virtualPaddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0;

  if (isLoading) return <SpinnerOverlay />;

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e) => fetchMoreOnBottomReached(e.target) : undefined}
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

      {renderTableFooter?.({ ...tableInstance })}
    </div>
  );
}

const Table = memo(forwardRef(TableToForward));

export default Table;
