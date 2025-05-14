import styles from './ResetColumnOrderButton.module.scss';

type ResetColumnOrderButtonProps = {
  onClick: (e: any) => void;
};

export default function ResetColumnOrderButton(props: ResetColumnOrderButtonProps) {
  const { onClick } = props;

  return (
    <div className={styles.resetButtonContainer}>
      <button type='button' className={styles.resetButton} onClick={onClick} title='Reset columns to default order'>
        🔄 Reset Order
      </button>
    </div>
  );
}
