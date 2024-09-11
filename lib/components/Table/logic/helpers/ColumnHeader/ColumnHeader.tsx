import IndeterminateCheckbox from '../IndeterminateCheckbox';
import styles from './ColumnHeader.module.scss';

type ColumnHeaderProps = {
  table: any;
  header: any;
};

export default function ColumnHeader(props: ColumnHeaderProps) {
  const { table, header } = props;

  return (
    <>
      <IndeterminateCheckbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
      <div className={styles.columnHeaderTitle}>{header}</div>
    </>
  );
}
