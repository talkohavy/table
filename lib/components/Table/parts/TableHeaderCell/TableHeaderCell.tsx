import { Header, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import ColumnResizer from '../../../ColumnResizer';
import DefaultFilter from '../../../DefaultFilter';
import SortButton from '../../../SortButton';
import { CLASSES } from '../../logic/constants';
import HeaderTitle from '../HeaderTitle';
import { useTableHeaderCellLogic } from './logic/useTableHeaderCellLogic';
import styles from './TableHeaderCell.module.scss';

const ORDER_ICONS = {
  left: '◀️',
  right: '▶️',
};

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
    handleMoveColumn,
    isMoveColumnButtonsVisible,
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
      // colSpan={header.colSpan}
    >
      {!isPlaceholder && (
        <div className={clsx(CLASSES.tableHeaderDiv, styles.defaultTableHeaderDiv)}>
          <div className={styles.tableHeaderContentWrapper}>
            <HeaderTitle columnDefHeader={columnDefHeader} getContext={getContext} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {isMoveColumnButtonsVisible && (
                <div className={styles.columnOrderButtonsContainer}>
                  <button
                    type='button'
                    className={clsx(styles.columnOrderButton, isLeftDisabled && styles.disabled)}
                    onClick={() => handleMoveColumn('left')}
                    onKeyDown={(e) => e.key === 'Enter' && !isLeftDisabled && handleMoveColumn('left')}
                    disabled={isLeftDisabled}
                    tabIndex={isLeftDisabled ? -1 : 0}
                    title='Move column left'
                    aria-label='Move column left'
                  >
                    {ORDER_ICONS.left}
                  </button>

                  <button
                    type='button'
                    className={clsx(styles.columnOrderButton, isRightDisabled && styles.disabled)}
                    onClick={() => handleMoveColumn('right')}
                    onKeyDown={(e) => e.key === 'Enter' && !isRightDisabled && handleMoveColumn('right')}
                    disabled={isRightDisabled}
                    tabIndex={isRightDisabled ? -1 : 0}
                    title='Move column right'
                    aria-label='Move column right'
                  >
                    {ORDER_ICONS.right}
                  </button>
                </div>
              )}

              {isSortButtonVisible && (
                <SortButton
                  sortType={getIsSorted()}
                  onClick={() => toggleSorting(undefined, getCanMultiSort())}
                  // onClick={getToggleSortingHandler()} //<--- this basic function only supports single column sort
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
