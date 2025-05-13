import { Header, Table } from '@tanstack/react-table';

type useTableHeaderCellLogicProps = {
  header: Header<any, unknown>;
  tableInstance: Table<unknown>;
};

export function useTableHeaderCellLogic(props: useTableHeaderCellLogicProps) {
  const { header, tableInstance } = props;

  const { id: headerId, column, getSize: getHeaderSize, getContext, getResizeHandler, isPlaceholder } = header;

  const {
    id: columnId,
    columnDef,
    getCanSort,
    getCanResize,
    getIsSorted,
    toggleSorting,
    getCanMultiSort,
    getCanFilter,
    getIsResizing,
    getFilterValue,
    setFilterValue,
    resetSize,
  } = column;

  const { header: columnDefHeader, enableSorting, enableColumnFilter, meta } = columnDef;

  const isSortButtonVisible = getCanSort() && enableSorting;
  const isFilterInputVisible = getCanFilter() && enableColumnFilter;
  const isResizable = getCanResize();

  return {
    headerId,
    getHeaderSize,
    isPlaceholder,
    columnDefHeader,
    getContext,
    getResizeHandler,
    getIsSorted,
    getCanMultiSort,
    toggleSorting,
    getIsResizing,
    resetSize,
    columnId,
    getFilterValue,
    setFilterValue,
    isResizable,
    isSortButtonVisible,
    isFilterInputVisible,
    meta,
    tableInstance,
  };
}
