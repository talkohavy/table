import { forwardRef, memo } from 'react';
import clsx from 'clsx';
import { TableFooter } from '../..';
import { CLASSES } from './logic/constants';
import TableBody from './logic/TableParts/TableBody';
import TableHeader from './logic/TableParts/TableHeader';
import styles from './Table.module.scss';
import { TableProps } from './types';
import { useTableLogic } from './logic/useTableLogic.ts';

function TableToForwardAndMemo<T>(props: TableProps<T>, outerRef: any) {
  const { customTableFooter, onCellClick, onBottomReached, showFooter, className } = props;

  const {
    tableInstance,
    tableParentRef,
    getRowModel,
    handleBottomReached,
    getCenterTotalSize,
    getHeaderGroups,
    paginationState,
  } = useTableLogic<T>(props, outerRef);

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e: any) => handleBottomReached(e.target) : undefined}
        className={clsx(CLASSES.tableParentRef, styles.tableParentRef)}
        ref={tableParentRef}
      >
        <div className={CLASSES.table} style={{ width: getCenterTotalSize() }}>
          <TableHeader getHeaderGroups={getHeaderGroups} tableInstance={tableInstance} />

          <TableBody getRowModel={getRowModel} onCellClick={onCellClick} tableParentRef={tableParentRef} />
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

const Table = memo(forwardRef(TableToForwardAndMemo));

export default Table;
