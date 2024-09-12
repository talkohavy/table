import clsx from 'clsx';
import { flexRender } from '@tanstack/react-table';
import { CLASSES } from '../../constants';
import styles from './TableBody.module.scss';

type TableBodyProps = {
  virtualRows: Array<any>;
  virtualPaddingTop: number;
  virtualPaddingBottom: number;
  rows: any;
  onCellClick?: (props: { cell: any; row: any }) => any;
};

export default function TableBody(props: TableBodyProps) {
  const { virtualRows, virtualPaddingTop, virtualPaddingBottom, rows, onCellClick } = props;

  return (
    <tbody>
      {virtualPaddingTop > 0 && (
        <tr className={clsx(CLASSES.tableDataRow, styles.tableDataRow, styles.defaultTableDataRowStyle)}>
          <td style={{ height: `${virtualPaddingTop}px` }} />
        </tr>
      )}

      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index];
        const handleRowClickOrKeyDown = row.getCanSelect()
          ? (e: any) => {
              if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
                e.preventDefault();

                row.getToggleSelectedHandler();
              }
            }
          : undefined;

        return (
          <tr
            key={row.id}
            onClick={handleRowClickOrKeyDown}
            onKeyDown={handleRowClickOrKeyDown}
            className={clsx(
              CLASSES.tableDataRow,
              styles.tableDataRow,
              styles.defaultTableDataRowStyle,
              row.getIsSelected() && CLASSES.tableDataRowSelected,
            )}
          >
            {row.getVisibleCells().map((cell: any) => {
              const { id: cellId, column, getContext } = cell;
              const { columnDef, getSize } = column;

              const handleCellClickOrKeyDown = (e: any) => {
                if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
                  e.preventDefault();

                  onCellClick?.({ cell, row });
                }
              };

              return (
                <td
                  key={cellId}
                  onClick={handleCellClickOrKeyDown}
                  onKeyDown={handleCellClickOrKeyDown}
                  align={columnDef.meta?.align}
                  className={clsx(styles.defaultTableDataCellStyle, CLASSES.tableDataCell)}
                  style={{ width: getSize() || '100%' }}
                >
                  {flexRender(columnDef.cell, getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}

      {virtualPaddingBottom > 0 && (
        <tr className={clsx(CLASSES.tableDataRow, styles.tableDataRow, styles.defaultTableDataRowStyle)}>
          <td style={{ height: `${virtualPaddingBottom}px` }} />
        </tr>
      )}
    </tbody>
  );
}
