import { forwardRef } from 'react';
import clsx from 'clsx';
import { TableFooter } from '../..';
import { CLASSES } from './logic/constants';
import { useTableLogic } from './logic/useTableLogic.ts';
import ColumnVisibilitySlider from './parts/ColumnVisibilitySlider';
import TableBody from './parts/TableBody/TableBody.tsx';
import TableHeader from './parts/TableHeader/TableHeader.tsx';
import styles from './Table.module.scss';
import { TableProps } from './types';

function TableToForward<T>(props: TableProps<T>, outerRef: any) {
  const {
    customTableFooter,
    onCellClick,
    onBottomReached,
    showFooter,
    showColumnsSelector,
    allowColumnReorder,
    shouldAnimate = true,
    className,
  } = props;

  const {
    tableInstance,
    tableParentRef,
    getRowModel,
    handleBottomReached,
    getHeaderGroups,
    paginationState,
    defaultColumnOrder,
  } = useTableLogic<T>(props, outerRef);

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e: any) => handleBottomReached(e.target) : undefined}
        className={clsx(CLASSES.tableParentRef, styles.tableParentRef)}
        ref={tableParentRef}
      >
        <div className={clsx(CLASSES.table, styles.table)}>
          <TableHeader
            getHeaderGroups={getHeaderGroups}
            tableInstance={tableInstance}
            defaultColumnOrder={defaultColumnOrder}
            allowColumnReorder={allowColumnReorder}
            shouldAnimate={shouldAnimate}
          />

          <TableBody getRowModel={getRowModel} onCellClick={onCellClick} tableParentRef={tableParentRef} />

          {showColumnsSelector && <ColumnVisibilitySlider columns={tableInstance.getAllLeafColumns()} />}
        </div>
      </div>

      {showFooter ? (
        <TableFooter {...tableInstance} {...paginationState} />
      ) : (
        customTableFooter?.({ ...tableInstance, ...paginationState })
      )}
    </div>
  );
}

const Table = forwardRef(TableToForward);

export default Table;
