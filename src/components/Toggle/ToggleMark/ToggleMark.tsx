import clsx from 'clsx';
import styles from './ToggleMark.module.scss';

type ToggleMarkProps = {
  isChecked: boolean;
};

export default function ToggleMark(props: ToggleMarkProps) {
  const { isChecked } = props;

  return (
    <div className={clsx(styles.toggleMark, isChecked ? styles.toggleMarkChecked : styles.toggleMarkUnchecked)}></div>
  );
}
