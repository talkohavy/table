import { forwardRef, useEffect, useRef } from 'react';
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
    getTopRows,
    getCenterRows,
    getBottomRows,
    handleBottomReached,
    getHeaderGroups,
    paginationState,
    defaultColumnOrder,
  } = useTableLogic<T>(props, outerRef);

  const sizesRef = useRef<{ headerHeight: number; rowHeight: number }>({ headerHeight: 0, rowHeight: 0 });

  console.log('sizes is:', sizesRef);

  useEffect(() => {
    if (tableParentRef.current) {
      const header = tableParentRef.current.querySelector(`.${CLASSES.tableHeaderTR}`)!;
      const row = tableParentRef.current.querySelector(`.${CLASSES.tableBodyTR}`)!;

      const headerHeight = header.clientHeight;
      const rowHeight = row.clientHeight;
      sizesRef.current.headerHeight = headerHeight;
      sizesRef.current.rowHeight = rowHeight;
    }
  }, [tableParentRef]);

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
            tableParentRef={tableParentRef}
          />

          <TableBody
            getRowModel={getRowModel}
            getTopRows={getTopRows}
            getCenterRows={getCenterRows}
            getBottomRows={getBottomRows}
            onCellClick={onCellClick}
            tableParentRef={tableParentRef}
            sizesRef={sizesRef}
          />

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
