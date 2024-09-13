import styles from './PageXOutOfY.module.scss';

type PageXOutOfYProps = {
  currentPage: number;
  totalNumOfPages: number;
};

export default function PageXOutOfY(props: PageXOutOfYProps) {
  const { currentPage, totalNumOfPages } = props;

  return (
    <div className={styles.pageXOutOfY}>
      <div>Page</div>

      <strong className={styles.xOutOfYValue}>
        {currentPage} of {totalNumOfPages}
      </strong>
    </div>
  );
}
