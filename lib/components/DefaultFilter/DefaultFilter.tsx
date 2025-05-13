import { Table } from '@tanstack/react-table';
import styles from './DefaultFilter.module.scss';

type DefaultFilterProps = {
  table: Table<unknown>;
  columnId: string;
  getFilterValue: () => any;
  setFilterValue: (updater: any) => void;
};

export default function DefaultFilter(props: DefaultFilterProps) {
  const { table, columnId, getFilterValue, setFilterValue } = props;

  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(columnId);

  const columnFilterValue = getFilterValue();

  if (typeof firstValue === 'number') {
    return (
      <div className={styles.filterContainer}>
        <input
          type='number'
          value={columnFilterValue?.[0] ?? ''}
          onChange={(e) => setFilterValue((old: any) => [e.target.value, old?.[1]])}
          placeholder='Min'
          className={styles.numberInput}
        />

        <input
          type='number'
          value={columnFilterValue?.[1] ?? ''}
          onChange={(e) => setFilterValue((old: any) => [old?.[0], e.target.value])}
          placeholder='Max'
          className={styles.numberInput}
        />
      </div>
    );
  }

  return (
    <input
      type='text'
      value={columnFilterValue}
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder='Search...'
      className={styles.textInput}
    />
  );
}
