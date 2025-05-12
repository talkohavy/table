import Button from '../../Button';
import styles from './PaginationButtons.module.scss';

type PaginationButtonsProps = {
  firstPage: () => void;
  previousPage: () => void;
  getCanPreviousPage: () => boolean;
  nextPage: () => void;
  lastPage: () => void;
  getCanNextPage: () => boolean;
};

export default function PaginationButtons(props: PaginationButtonsProps) {
  const { firstPage, getCanPreviousPage, previousPage, nextPage, lastPage, getCanNextPage } = props;

  return (
    <div className={styles.paginationButtons}>
      <Button
        className={styles.tableButton}
        onClick={() => firstPage()}
        disabled={!getCanPreviousPage()}
      >{`<<`}</Button>

      <Button
        className={styles.tableButton}
        onClick={() => previousPage()}
        disabled={!getCanPreviousPage()}
      >{`<`}</Button>

      <Button className={styles.tableButton} onClick={() => nextPage()} disabled={!getCanNextPage()}>{`>`}</Button>

      <Button className={styles.tableButton} onClick={() => lastPage()} disabled={!getCanNextPage()}>{`>>`}</Button>
    </div>
  );
}
