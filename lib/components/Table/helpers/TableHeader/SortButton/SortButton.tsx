import ArrowIcon from '../../../../../svgs/ArrowIcon';
import styles from './SortButton.module.scss';

const SORTING_ICONS: any = {
  asc: () => <ArrowIcon size={16} />,
  desc: () => <ArrowIcon size={16} className='rotate-180' />,
  none: '',
};

type SortButtonProps = {
  onClick: any;
  sortType: 'asc' | 'desc' | 'none';
};

export default function SortButton(props: SortButtonProps) {
  const { onClick, sortType } = props;

  return (
    <div className={styles.sortButton} onClick={onClick}>
      {SORTING_ICONS[sortType]?.() ?? SORTING_ICONS.none}
    </div>
  );
}
