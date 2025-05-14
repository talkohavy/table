import { Header, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import ColumnResizer from '../../../ColumnResizer';
import DefaultFilter from '../../../DefaultFilter';
import MoveColumnButtons from '../../../MoveColumnButtons';
import SortButton from '../../../SortButton';
import { CLASSES } from '../../logic/constants';
import HeaderTitle from '../HeaderTitle';
import { useTableHeaderCellLogic } from './logic/useTableHeaderCellLogic';
import styles from './TableHeaderCell.module.scss';

type TableHeaderCellProps = {
  header: Header<any, unknown>;
  tableInstance: Table<unknown>;
  allowColumnReorder?: boolean;
};

export default function TableHeaderCell(props: TableHeaderCellProps) {
  const {
    headerId,
    getHeaderSize,
    isPlaceholder,
    columnDefHeader,
    getContext,
    getResizeHandler,
    resetSize,
    getIsSorted,
    getCanMultiSort,
    toggleSorting,
    getIsResizing,
    getFilterValue,
    setFilterValue,
    columnId,
    isResizable,
    isSortButtonVisible,
    isFilterInputVisible,
    isMoveColumnButtonsVisible,
    handleMoveColumn,
    isLeftDisabled,
    isRightDisabled,
    meta,
    tableInstance,
  } = useTableHeaderCellLogic(props);

  return (
    <div
      key={headerId}
      className={clsx(CLASSES.tableHeaderTH, styles.tableHeaderTH, (meta as any)?.className)}
      style={{ width: getHeaderSize() }}
    >
      {!isPlaceholder && (
        <div className={clsx(CLASSES.tableHeaderDiv, styles.defaultTableHeaderDiv)}>
          <div className={styles.tableHeaderContentWrapper}>
            <HeaderTitle columnDefHeader={columnDefHeader} getContext={getContext} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {isMoveColumnButtonsVisible && (
                <MoveColumnButtons
                  handleMoveColumn={handleMoveColumn}
                  isLeftDisabled={isLeftDisabled}
                  isRightDisabled={isRightDisabled}
                />
              )}

              {isSortButtonVisible && (
                <SortButton
                  sortType={getIsSorted()}
                  onClick={() => toggleSorting(undefined, getCanMultiSort())}
                  // onClick={getToggleSortingHandler()} //<--- this function is very basic and only supports single column sort
                />
              )}
            </div>
          </div>

          {isFilterInputVisible && (
            <DefaultFilter
              table={tableInstance}
              columnId={columnId}
              getFilterValue={getFilterValue}
              setFilterValue={setFilterValue}
            />
          )}
        </div>
      )}

      {isResizable && (
        <ColumnResizer
          onMouseDown={getResizeHandler()}
          onTouchStart={getResizeHandler()}
          onDoubleClick={() => resetSize()}
          isResizing={getIsResizing()}
        />
      )}
    </div>
  );
}
