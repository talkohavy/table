import { PropsWithChildren } from 'react';
import { Row } from '@tanstack/react-table';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import styles from './TableBodyRow.module.scss';

type TableBodyRowProps = PropsWithChildren<{
  row: Row<any>;
}>;

export default function TableBodyRow(props: TableBodyRowProps) {
  const { children, row } = props;

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
      )}
    >
      {children}
    </div>
  );
}
