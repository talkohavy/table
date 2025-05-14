import { Table } from '@tanstack/react-table';
import { CLASSES } from '../../../../logic/constants';
import '../../TableHeaderCell.animation.scss';
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

    // Apply animation before reordering
    // Find all cells that need to be animated (both header and body cells)

    try {
      const tableHeaderContainer = document.querySelector(CLASSES.tableHeaderTHead)!;
      const tableBodyContainer = document.querySelector(CLASSES.tableBody)!;
      const headerPlaceholdersAndRows = tableHeaderContainer.querySelectorAll(CLASSES.tableHeaderTR);
      const headersRow = headerPlaceholdersAndRows[headerPlaceholdersAndRows.length - 1]!;
      const headerCells = headersRow.querySelectorAll(CLASSES.tableHeaderTH);
      // Get the DOM positions of the columns we're swapping
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
      const bodyRows = tableBodyContainer.querySelectorAll('.tk-table-body-tr');
      bodyRows.forEach((row) => {
        const cells = row.querySelectorAll('.tk-table-body-td');
        if (cells.length > 0 && currentIndex < cells.length && newIndex < cells.length) {
          const currentCell = cells[currentIndex] as HTMLElement;
          const targetCell = cells[newIndex] as HTMLElement;

          if (currentCell && targetCell) {
            currentCell.classList.add('column-transition');
            targetCell.classList.add('column-transition');
            currentCell.style.transform = `translateX(${moveDistance}px)`;
            targetCell.style.transform = `translateX(${oppositeDistance}px)`;
          }
        }
      });

      // After animation completes, remove transforms and update the actual order
      setTimeout(() => {
        // Reset all transforms
        const animatedCells = document.querySelectorAll('.column-transition');
        animatedCells.forEach((cell) => {
          (cell as HTMLElement).style.transform = '';
          cell.classList.remove('column-transition');
        });

        // Update the actual column order in the table instance
        const newColumnOrder = [...currentColumnOrder];
        const temp = newColumnOrder[currentIndex];
        newColumnOrder[currentIndex] = newColumnOrder[newIndex]!;
        newColumnOrder[newIndex] = temp!;

        tableInstance.setColumnOrder(newColumnOrder);
      }, 300); // <--- MUST match timing with CSS transition duration
    } catch (error) {
      console.error('Error during column animation:', error);
      applyFallbackReordering();
    }

    function applyFallbackReordering() {
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
