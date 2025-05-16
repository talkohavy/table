import { PropsWithChildren } from 'react';
import { Row } from '@tanstack/react-table';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import styles from './TableBodyRow.module.scss';

type TableBodyRowProps = PropsWithChildren<{
  row: Row<any>;
  isPinnedToTop?: boolean;
  isPinnedToBottom?: boolean;
  bottomRowsCount?: number;
  sizesRef: any;
}>;

export default function TableBodyRow(props: TableBodyRowProps) {
  const { children, row, isPinnedToTop, isPinnedToBottom, bottomRowsCount = 0, sizesRef } = props;

  const isRowPinned = isPinnedToTop || isPinnedToBottom;

  const onSelectRowClick = (e: any, row: Row<any>) => {
    if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
      e.preventDefault();

      row.getToggleSelectedHandler();
    }
  };

  return (
    <div
      onClick={(e) => onSelectRowClick(e, row)}
      onKeyDown={(e) => onSelectRowClick(e, row)}
      className={clsx(
        CLASSES.tableBodyTR,
        styles.tableBodyTR,
        row.getIsSelected() && CLASSES.tableBodyTRSelected,
        styles.defaultTableBodyTRStyle,
        isRowPinned && `${CLASSES.tableBodyTRPinned} ${styles.pinnedRow}`,
      )}
      style={{
        top: isPinnedToTop
          ? `${row.getPinnedIndex() * sizesRef.current.rowHeight + sizesRef.current.headerHeight}px`
          : undefined,
        bottom: isPinnedToBottom
          ? `${(bottomRowsCount - 1 - row.getPinnedIndex()) * sizesRef.current.rowHeight}px`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
