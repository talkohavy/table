import { MutableRefObject } from 'react';
import { ColumnOrderState, HeaderGroup, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import ResetColumnOrderButton from '../../../ResetColumnOrderButton';
import { CLASSES } from '../../logic/constants';
import { useIsColumnOrderChanged } from '../../logic/hooks/useIsColumnOrderChanged';
import TableHeaderCell from '../TableHeaderCell';
import styles from './TableHeader.module.scss';

type TableHeaderProps = {
  tableInstance: Table<unknown>;
  getHeaderGroups: () => Array<HeaderGroup<any>>;
  defaultColumnOrder: ColumnOrderState;
  allowColumnReorder?: boolean;
  shouldAnimate?: boolean;
  tableParentRef?: MutableRefObject<HTMLDivElement | null>;
};

export default function TableHeader(props: TableHeaderProps) {
  const { getHeaderGroups, tableInstance, defaultColumnOrder, allowColumnReorder, shouldAnimate, tableParentRef } =
    props;

  const { isColumnOrderChanged } = useIsColumnOrderChanged({ tableInstance, defaultColumnOrder });
  const resetColumnOrder = () => {
    tableInstance.setColumnOrder(defaultColumnOrder);
  };

  return (
    <div
      className={clsx(CLASSES.tableHeaderTHead, styles.tableHeaderTHead)}
      title='Tip: Use the arrow buttons to reorder columns'
    >
      {allowColumnReorder && isColumnOrderChanged() && <ResetColumnOrderButton onClick={resetColumnOrder} />}

      {getHeaderGroups().map((headerGroup) => (
        <div
          key={headerGroup.id}
          className={clsx(CLASSES.tableHeaderTR, styles.tableHeaderTR, styles.defaultTableHeaderTRStyle)}
        >
          {headerGroup.headers.map((header) => {
            return (
              <TableHeaderCell
                key={header.id}
                header={header}
                tableInstance={tableInstance}
                allowColumnReorder={allowColumnReorder}
                shouldAnimate={shouldAnimate}
                tableParentRef={tableParentRef}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
