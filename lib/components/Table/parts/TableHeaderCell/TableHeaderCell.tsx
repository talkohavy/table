import { Header, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import ColumnResizer from '../../../ColumnResizer';
import DefaultFilter from '../../../DefaultFilter';
import SortButton from '../../../SortButton';
import { CLASSES } from '../../logic/constants';
import HeaderTitle from '../HeaderTitle';
import { useTableHeaderCellLogic } from './logic/useTableHeaderCellLogic';
import styles from './TableHeaderCell.module.scss';

type TableHeaderCellProps = {
  header: Header<any, unknown>;
  tableInstance: Table<unknown>;
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
    columnId,
    getFilterValue,
    setFilterValue,
    isResizable,
    isSortButtonVisible,
    isFilterInputVisible,
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

            {isSortButtonVisible && (
              <SortButton
                sortType={getIsSorted()}
                onClick={() => toggleSorting(undefined, getCanMultiSort())}
                // onClick={getToggleSortingHandler()} //<--- this basic function only supports single column sort
              />
            )}
          </div>

          {!isFilterInputVisible && (
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
