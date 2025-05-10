import { forwardRef } from 'react';
import clsx from 'clsx';
import { TableFooter } from '../..';
import { CLASSES } from './logic/constants';
import TableBody from './logic/TableParts/TableBody';
import TableHeader from './logic/TableParts/TableHeader';
import { useTableLogic } from './logic/useTableLogic.ts';
import styles from './Table.module.scss';
import { TableProps } from './types';

function TableToForwardAndMemo<T>(props: TableProps<T>, outerRef: any) {
  const { customTableFooter, onCellClick, onBottomReached, showFooter, className } = props;

  const { tableInstance, tableParentRef, getRowModel, handleBottomReached, getHeaderGroups, paginationState } =
    useTableLogic<T>(props, outerRef);

  return (
    <div className={clsx(CLASSES.tableWrapper, styles.tableWrapper, className ?? styles.defaultTableWrapperStyle)}>
      <div
        onScroll={onBottomReached ? (e: any) => handleBottomReached(e.target) : undefined}
        className={clsx(CLASSES.tableParentRef, styles.tableParentRef)}
        ref={tableParentRef}
      >
        <div className={clsx(CLASSES.table, styles.table)}>
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

const Table = forwardRef(TableToForwardAndMemo);

export default Table;
