import { Header, flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import ColumnResizer from '../../../ColumnResizer';
import DefaultFilter from '../../../DefaultFilter';
import SortButton from '../../../SortButton';
import { CLASSES } from '../../logic/constants';
import styles from './TableHeaderCell.module.scss';

type TableHeaderCellProps = {
  header: Header<any, unknown>;
  tableInstance: any;
};

export default function TableHeaderCell(props: TableHeaderCellProps) {
  const { header, tableInstance } = props;

  const { columnDef, getCanSort, getCanResize } = header.column;
  const { enableSorting, meta } = columnDef;

  const isSortButtonVisible = getCanSort() && enableSorting;
  const isResizable = getCanResize();

  return (
    <div
      key={header.id}
      className={clsx(CLASSES.tableHeaderTH, styles.tableHeaderTH, (meta as any)?.className)}
      style={{ width: header.getSize() }}
      // colSpan={header.colSpan}
    >
      {!header.isPlaceholder && (
        <div className={clsx(CLASSES.tableHeaderDiv, styles.defaultTableHeaderDiv)}>
          <div className={styles.tableHeaderContentWrapper}>
            {/* ------------------ */}
            {/* Display the Header */}
            {/* ------------------ */}
            <div className={(CLASSES.tableHeaderValue, styles.tableHeaderValue)}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </div>

            {isSortButtonVisible && (
              <SortButton
                sortType={header.column.getIsSorted()}
                onClick={() => header.column.toggleSorting(undefined, header.column.getCanMultiSort())}
                // onClick={header.column.getToggleSortingHandler()} //<--- this basic function only supports single column sort
              />
            )}
          </div>

          {/* ------------------ */}
          {/* Display the Filter */}
          {/* ------------------ */}
          {header.column.getCanFilter() && header.column.columnDef.enableColumnFilter && (
            <DefaultFilter table={tableInstance} column={header.column} />
          )}
        </div>
      )}

      {isResizable && (
        <ColumnResizer
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          onDoubleClick={() => header.column.resetSize()}
          isResizing={header.column.getIsResizing()}
        />
      )}
    </div>
  );
}
