import { Header, Table } from '@tanstack/react-table';
import { useGetColumnOrder } from '../../../logic/hooks/useGetColumnOrder';

type useTableHeaderCellLogicProps = {
  header: Header<any, unknown>;
  tableInstance: Table<unknown>;
  allowColumnReorder?: boolean;
};

export function useTableHeaderCellLogic(props: useTableHeaderCellLogicProps) {
  const { header, tableInstance, allowColumnReorder } = props;

  const getColumnOrder = useGetColumnOrder({ tableInstance });

  const columnOrderArr = getColumnOrder();

  const currentIndex = columnOrderArr.indexOf(header.column.id);
  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex === columnOrderArr.length - 1;

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

  const isLeafNode = !subHeaders || subHeaders.length === 0;
  const isSortButtonVisible = getCanSort() && enableSorting;
  const isFilterInputVisible = getCanFilter() && enableColumnFilter;
  const isResizable = getCanResize();
  const isMoveColumnButtonsVisible = isLeafNode && allowColumnReorder;

  const handleMoveColumn = (direction: 'left' | 'right') => {
    const currentColumnOrder = [...tableInstance.getState().columnOrder];

    const currentIndex = currentColumnOrder.indexOf(columnId);

    if (currentIndex === -1) return; // <--- should never happen but still...

    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

    const newColumnOrder = [...currentColumnOrder];
    const temp = newColumnOrder[currentIndex];
    newColumnOrder[currentIndex] = newColumnOrder[newIndex]!;
    newColumnOrder[newIndex] = temp!;

    tableInstance.setColumnOrder(newColumnOrder);
  };

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
    isLeftDisabled,
    isRightDisabled,
    isSortButtonVisible,
    isFilterInputVisible,
    isMoveColumnButtonsVisible,
    handleMoveColumn,
    meta,
    tableInstance,
  };
}
