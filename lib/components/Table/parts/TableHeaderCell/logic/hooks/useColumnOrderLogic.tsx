import { MutableRefObject } from 'react';
import { Table } from '@tanstack/react-table';
import { CLASSES } from '../../../../logic/constants';
import '../../TableHeaderCell.animation.scss';
import { useGetColumnOrder } from '../../../../logic/hooks/useGetColumnOrder';

type useColumnOrderLogicProps = {
  tableInstance: Table<unknown>;
  subHeaders: any;
  columnId: string;
  allowColumnReorder?: boolean;
  shouldAnimate?: boolean;
  tableParentRef?: MutableRefObject<HTMLDivElement | null>;
};

export function useColumnOrderLogic(props: useColumnOrderLogicProps) {
  const { tableInstance, columnId, subHeaders, allowColumnReorder, shouldAnimate, tableParentRef } = props;

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

    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;

    if (!shouldAnimate) return updateColumnOrder();

    return animateColumnSwap();

    function animateColumnSwap() {
      if (tableParentRef?.current == null) return;

      const tableElement = tableParentRef.current.querySelector(`.${CLASSES.table}`)!;
      const tableHeaderContainer = tableElement.querySelector(`.${CLASSES.tableHeaderTHead}`)!;
      const tableBodyContainer = tableElement.querySelector(`.${CLASSES.tableBody}`)!;
      const headerPlaceholdersAndRows = tableHeaderContainer.querySelectorAll(`.${CLASSES.tableHeaderTR}`);
      const headersRow = headerPlaceholdersAndRows[headerPlaceholdersAndRows.length - 1]!;
      const headerCells = headersRow.querySelectorAll(`.${CLASSES.tableHeaderTH}`);
      const currentHeaderCell = headerCells[currentIndex] as HTMLElement;
      const targetHeaderCell = headerCells[newIndex] as HTMLElement;

      // Calculate widths for animation
      const currentWidth = currentHeaderCell.offsetWidth;
      const targetWidth = targetHeaderCell.offsetWidth;
      const moveDistance = direction === 'left' ? -targetWidth : targetWidth;
      const oppositeDistance = direction === 'left' ? currentWidth : -currentWidth;

      // Start animation for header cells
      currentHeaderCell.classList.add('column-transition');
      targetHeaderCell.classList.add('column-transition');
      currentHeaderCell.style.transform = `translateX(${moveDistance}px)`;
      targetHeaderCell.style.transform = `translateX(${oppositeDistance}px)`;

      // Now animate the body cells in each row
      const bodyRows = tableBodyContainer.querySelectorAll(`.${CLASSES.tableBodyTR}`);
      bodyRows.forEach((row) => {
        const cells = row.querySelectorAll(`.${CLASSES.tableBodyTD}`);
        if (cells.length > 0 && currentIndex < cells.length && newIndex < cells.length) {
          const currentCell = cells[currentIndex] as HTMLElement;
          const targetCell = cells[newIndex] as HTMLElement;

          currentCell.classList.add('column-transition');
          targetCell.classList.add('column-transition');
          currentCell.style.transform = `translateX(${moveDistance}px)`;
          targetCell.style.transform = `translateX(${oppositeDistance}px)`;
        }
      });

      setTimeout(() => {
        updateColumnOrder();
        resetAllTransformClasses(tableElement!);
      }, 300); // <--- MUST match timing with CSS transition duration
    }

    function resetAllTransformClasses(tableElement: Element) {
      const animatedCells = tableElement.querySelectorAll('.column-transition');
      animatedCells.forEach((cell) => {
        (cell as HTMLElement).style.transform = '';
        cell.classList.remove('column-transition');
      });
    }

    function updateColumnOrder() {
      const newColumnOrder = [...currentColumnOrder];
      const temp = newColumnOrder[currentIndex];
      newColumnOrder[currentIndex] = newColumnOrder[newIndex]!;
      newColumnOrder[newIndex] = temp!;

      tableInstance.setColumnOrder(newColumnOrder);
    }
  };

  return {
    isLeftDisabled,
    isRightDisabled,
    isMoveColumnButtonsVisible,
    handleMoveColumn,
  };
}
