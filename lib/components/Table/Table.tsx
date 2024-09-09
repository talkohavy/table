import styles from './Table.module.scss';

type TableProps = {
  name: string;
};

export default function Table(props: TableProps) {
  const { name } = props;
  console.log('name', name);

  return <div className={styles.table}>Table</div>;
}
