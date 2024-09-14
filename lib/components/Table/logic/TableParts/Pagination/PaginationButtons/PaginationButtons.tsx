import TableButton from '../../../TableParts/TableButton';
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
      <TableButton label='<<' onClick={() => firstPage()} disabled={!getCanPreviousPage()} />
      <TableButton label='<' onClick={() => previousPage()} disabled={!getCanPreviousPage()} />
      <TableButton label='>' onClick={() => nextPage()} disabled={!getCanNextPage()} />
      <TableButton label='>>' onClick={() => lastPage()} disabled={!getCanNextPage()} />
    </div>
  );
}
