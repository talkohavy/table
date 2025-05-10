import clsx from 'clsx';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { CLASSES } from '../../constants';
import styles from './TableCell.module.scss';

type TableCellProps = {
  cell: Cell<any, unknown>;
  row: Row<any>;
  onCellClick?: (props: { cell: any; row: any }) => any;
};

export default function TableCell(props: TableCellProps) {
  const { cell, row, onCellClick } = props;

  const { column, getContext } = cell;
  const { columnDef, getSize } = column;

  const handleCellClickOrKeyDown = (e: any) => {
    if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
      e.preventDefault();

      onCellClick?.({ cell, row });
    }
  };

  return (
    <div
      onClick={handleCellClickOrKeyDown}
      onKeyDown={handleCellClickOrKeyDown}
      className={clsx(CLASSES.tableBodyTD, styles.tableBodyTD, styles.defaultTableBodyTDStyle)}
      style={{ width: getSize() }}
    >
      {flexRender(columnDef.cell, getContext())}
    </div>
  );
}
