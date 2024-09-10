import { useCallback } from 'react';
import { flexRender } from '@tanstack/react-table';
import { CLASSES } from '../../constants';
import DefaultFilter from '../DefaultFilter';
import ColumnResizer from './ColumnResizer';
import SortButton from './SortButton';
import styles from './TableHeader.module.scss';

type TableHeaderProps = {
  tableInstance: any;
  getHeaderGroups: any;
};

export default function TableHeader(props: TableHeaderProps) {
  const { getHeaderGroups, tableInstance } = props;

  const onHeaderClick = useCallback(
    (e: any, header: any) => e.target.tagName !== 'INPUT' && header.column.getToggleSortingHandler()(e),
    [],
  );

  return (
    <thead>
      {getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id} className={CLASSES.tableHeaderRow}>
          {headerGroup.headers.map((header: any) => {
            const isSortButtonVisible = header.column.getCanSort() && header.column.columnDef.enableSorting;
            const isResizable = header.column.getCanResize();

            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                style={{ width: header.getSize() }}
                className={CLASSES.tableHeaderCell}
              >
                {header.isPlaceholder ? null : (
                  <div>
                    <div className={styles.tableHeaderContentWrapper}>
                      {/* ------------------ */}
                      {/* Display the Header */}
                      {/* ------------------ */}
                      <div className={CLASSES.tableHeaderCellValue}>
                        {/* <div className='flex w-full select-none items-center justify-between'> */}
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>

                      {isSortButtonVisible && (
                        <SortButton
                          sortType={header.column.getIsSorted()}
                          onClick={(e: any) => onHeaderClick(e, header)}
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
                    isResizing={header.column.getIsResizing()}
                  />
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}
