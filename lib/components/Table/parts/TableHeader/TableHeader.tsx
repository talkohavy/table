import { HeaderGroup } from '@tanstack/react-table';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import TableHeaderCell from '../TableHeaderCell';
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
            return <TableHeaderCell key={header.id} header={header} tableInstance={tableInstance} />;
          })}
        </div>
      ))}
    </div>
  );
}
