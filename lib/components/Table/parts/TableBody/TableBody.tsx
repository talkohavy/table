import { useVirtual } from 'react-virtual';
import { Cell, Row, RowModel } from '@tanstack/react-table';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import TableBodyRow from '../TableBodyRow';
import TableCell from '../TableCell';
import styles from './TableBody.module.scss';

type TableBodyProps = {
  getRowModel: () => RowModel<any>;
  getTopRows: () => Row<any>[];
  getCenterRows: () => Row<any>[];
  getBottomRows: () => Row<any>[];
  onCellClick?: (props: { cell: any; row: any }) => any;
  tableParentRef: any;
  sizesRef: any;
};

export default function TableBody(props: TableBodyProps) {
  const { getTopRows, getCenterRows, getBottomRows, onCellClick, tableParentRef, sizesRef } = props;

  const rows = getCenterRows();

  // Calculate virtual gaps:
  const rowVirtualizer = useVirtual({ parentRef: tableParentRef, size: rows.length, overscan: 10 });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const virtualPaddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0;

  return (
    <div className={CLASSES.tableBody}>
      {virtualPaddingTop > 0 && (
        <div className={clsx(CLASSES.tableBodyTR, styles.tableBodyTR, styles.defaultTableBodyTRStyle)}>
          <div className={styles.tableBodyTD} style={{ height: `${virtualPaddingTop}px` }} />
        </div>
      )}

      {getTopRows().map((row) => (
        <TableBodyRow key={row.id} row={row} isPinnedToTop sizesRef={sizesRef}>
          {row.getVisibleCells().map((cell: Cell<any, unknown>) => {
            return <TableCell key={cell.id} cell={cell} row={row} onCellClick={onCellClick} />;
          })}
        </TableBodyRow>
      ))}

      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index]!;
        return (
          <TableBodyRow key={row.id} row={row} sizesRef={sizesRef}>
            {row.getVisibleCells().map((cell: Cell<any, unknown>) => {
              return <TableCell key={cell.id} cell={cell} row={row} onCellClick={onCellClick} />;
            })}
          </TableBodyRow>
        );
      })}

      {getBottomRows().map((row) => (
        <TableBodyRow
          key={row.id}
          row={row}
          isPinnedToBottom
          bottomRowsCount={getBottomRows().length}
          sizesRef={sizesRef}
        >
          {row.getVisibleCells().map((cell: Cell<any, unknown>) => {
            return <TableCell key={cell.id} cell={cell} row={row} onCellClick={onCellClick} />;
          })}
        </TableBodyRow>
      ))}

      {virtualPaddingBottom > 0 && (
        <div className={clsx(CLASSES.tableBodyTR, styles.tableBodyTR, styles.defaultTableBodyTRStyle)}>
          <div className={styles.tableBodyTD} style={{ height: `${virtualPaddingBottom}px` }} />
        </div>
      )}
    </div>
  );
}
