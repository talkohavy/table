import IndeterminateCheckbox from '../../../../IndeterminateCheckbox';
import styles from './ColumnHeader.module.scss';

type ColumnHeaderProps = {
  table: any;
  header: any;
  showCheckbox?: boolean;
};

export default function ColumnHeader(props: ColumnHeaderProps) {
  const { table, header, showCheckbox = true } = props;

  return (
    <div className={styles.columnHeader}>
      {showCheckbox && (
        <IndeterminateCheckbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      )}

      <div className={styles.columnHeaderTitle}>{header}</div>
    </div>
  );
}
