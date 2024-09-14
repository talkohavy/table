import Button from '../../../../Button';
import styles from './TableButton.module.scss';

type TableButtonProps = {
  label: any;
  onClick: () => void;
  disabled: boolean;
};

export default function TableButton(props: TableButtonProps) {
  const { label, onClick, disabled } = props;

  return (
    <Button onClick={onClick} disabled={disabled} className={styles.tableButton}>
      {label}
    </Button>
  );
}
