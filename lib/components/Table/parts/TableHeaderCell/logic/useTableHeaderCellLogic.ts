import { MutableRefObject } from 'react';
import { Header, Table } from '@tanstack/react-table';
import { useColumnOrderLogic } from './hooks/useColumnOrderLogic';

type useTableHeaderCellLogicProps = {
  tableInstance: Table<unknown>;
  header: Header<any, unknown>;
  allowColumnReorder?: boolean;
  shouldAnimate?: boolean;
  tableParentRef?: MutableRefObject<HTMLDivElement | null>;
};

export function useTableHeaderCellLogic(props: useTableHeaderCellLogicProps) {
  const { tableParentRef, tableInstance, header, allowColumnReorder, shouldAnimate } = props;

  const {
    id: headerId,
    column,
    getSize: getHeaderSize,
    getContext,
    getResizeHandler,
    isPlaceholder,
    subHeaders,
  } = header;

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

  const { isLeftDisabled, isRightDisabled, isMoveColumnButtonsVisible, handleMoveColumn } = useColumnOrderLogic({
    tableInstance,
    columnId,
    shouldAnimate,
    allowColumnReorder,
    tableParentRef,
    subHeaders,
  });

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
    isMoveColumnButtonsVisible,
    handleMoveColumn,
    isLeftDisabled,
    isRightDisabled,
    meta,
    tableInstance,
  };
}
