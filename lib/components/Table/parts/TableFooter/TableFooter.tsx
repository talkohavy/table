import { Table } from '@tanstack/react-table';
import PageXOutOfY from '../Pagination/PageXOutOfY';
import PaginationButtons from '../Pagination/PaginationButtons';
import SelectPageSize from '../Pagination/SelectPageSize';
import styles from './TableFooter.module.scss';

type PaginationProps = Table<any> & {
  pageIndex: number;
  pageSize: number;
};

export default function TableFooter(props: PaginationProps) {
  const {
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
    firstPage,
    lastPage,
    setPageSize,
    getPageCount,
    // getState,
    // setPageIndex,
    // resetPageIndex,
    // resetPageSize,
    // setPagination,
    // resetPagination,
    pageIndex,
    pageSize,
  } = props;

  return (
    <div className={styles.tableFooter}>
      <PaginationButtons
        firstPage={firstPage}
        lastPage={lastPage}
        previousPage={previousPage}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        getCanPreviousPage={getCanPreviousPage}
      />

      <PageXOutOfY currentPage={pageIndex + 1} totalNumOfPages={getPageCount()} />

      <SelectPageSize pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  );
}
