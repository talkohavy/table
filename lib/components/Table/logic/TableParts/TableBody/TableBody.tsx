import clsx from 'clsx';
import { useVirtual } from 'react-virtual';
import { Cell, RowModel, flexRender } from '@tanstack/react-table';
import { CLASSES } from '../../constants';
import styles from './TableBody.module.scss';

type TableBodyProps = {
  getRowModel: () => RowModel<any>;
  onCellClick?: (props: { cell: any; row: any }) => any;
  tableParentRef: any;
};

export default function TableBody(props: TableBodyProps) {
  const { getRowModel, onCellClick, tableParentRef } = props;

  const { rows } = getRowModel();

  // Calculate virtual gaps:
  const rowVirtualizer = useVirtual({ parentRef: tableParentRef, size: rows.length, overscan: 10 });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const virtualPaddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0;

  return (
    <tbody>
      {virtualPaddingTop > 0 && (
        <tr className={clsx(CLASSES.tableBodyTR, styles.tableBodyTR, styles.defaultTableBodyTRStyle)}>
          <td style={{ height: `${virtualPaddingTop}px` }} />
        </tr>
      )}

      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index]!;
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
              CLASSES.tableBodyTR,
              styles.tableBodyTR,
              styles.defaultTableBodyTRStyle,
              row.getIsSelected() && CLASSES.tableBodyTRSelected,
            )}
          >
            {row.getVisibleCells().map((cell: Cell<any, unknown>) => {
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
                  align={(columnDef.meta as any)?.align} // <--- `align` is made up, custom-made, and you can use it inside your columnDefs to align text inside the cell.
                  className={clsx(CLASSES.tableBodyTD, styles.defaultTableBodyTDStyle)}
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
        <tr className={clsx(CLASSES.tableBodyTR, styles.tableBodyTR, styles.defaultTableBodyTRStyle)}>
          <td style={{ height: `${virtualPaddingBottom}px` }} />
        </tr>
      )}
    </tbody>
  );
}
