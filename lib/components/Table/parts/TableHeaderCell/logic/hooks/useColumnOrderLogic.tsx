import { Table } from '@tanstack/react-table';
import { useGetColumnOrder } from '../../../../logic/hooks/useGetColumnOrder';

type useColumnOrderLogicProps = {
  tableInstance: Table<unknown>;
  subHeaders: any;
  columnId: string;
  allowColumnReorder?: boolean;
};

export function useColumnOrderLogic(props: useColumnOrderLogicProps) {
  const { tableInstance, columnId, subHeaders, allowColumnReorder } = props;

  const getColumnOrder = useGetColumnOrder({ tableInstance });

  const columnOrderArr = getColumnOrder();

  const currentIndex = columnOrderArr.indexOf(columnId);
  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex === columnOrderArr.length - 1;
  const isLeafNode = !subHeaders || subHeaders.length === 0;
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
    isLeftDisabled,
    isRightDisabled,
    isMoveColumnButtonsVisible,
    handleMoveColumn,
  };
}
