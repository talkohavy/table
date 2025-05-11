import { HeaderGroup, flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import DefaultFilter from '../DefaultFilter';
import ColumnResizer from './ColumnResizer';
import SortButton from './SortButton';
import styles from './TableHeader.module.scss';

type TableHeaderProps = {
  tableInstance: any;
  getHeaderGroups: () => Array<HeaderGroup<any>>;
};

export default function TableHeader(props: TableHeaderProps) {
  const { getHeaderGroups, tableInstance } = props;

  return (
    <div className={clsx(CLASSES.tableHeaderTHead, styles.tableHeaderTHead)}>
      {getHeaderGroups().map((headerGroup) => (
        <div
          key={headerGroup.id}
          className={clsx(CLASSES.tableHeaderTR, styles.tableHeaderTR, styles.defaultTableHeaderTRStyle)}
        >
          {headerGroup.headers.map((header) => {
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
          })}
        </div>
      ))}
    </div>
  );
}
