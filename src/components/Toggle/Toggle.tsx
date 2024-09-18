import styles from './Toggle.module.scss';
import ToggleMark from './ToggleMark';

type ToggleProps = {
  isChecked: boolean;
  setIsChecked: (value: any) => void;
};

export default function Toggle(props: ToggleProps) {
  const { isChecked, setIsChecked } = props;

  return (
    <div className={styles.toggle} onClick={setIsChecked}>
      <ToggleMark isChecked={isChecked} />
    </div>
  );
}
