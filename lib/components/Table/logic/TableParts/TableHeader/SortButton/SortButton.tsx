import { SortDirection } from '@tanstack/react-table';
import styles from './SortButton.module.scss';

const SORTING_ICONS = {
  asc: '⬆️', // <--- Options: ⬆️🔼
  desc: '⬇️', // <--- Options: ⬇️🔽
  none: '⏹️', // <--- Options: ⏺️⏹️⏸️*️⃣
};

type SortButtonProps = {
  onClick: any;
  sortType: false | SortDirection;
};

export default function SortButton(props: SortButtonProps) {
  const { onClick, sortType } = props;

  return (
    <div className={styles.sortButton} onClick={onClick}>
      {sortType ? SORTING_ICONS[sortType] : SORTING_ICONS.none}
    </div>
  );
}
