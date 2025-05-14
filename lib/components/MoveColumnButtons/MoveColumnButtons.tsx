import clsx from 'clsx';
import styles from './MoveColumnButtons.module.scss';

type MoveColumnButtonsProps = {
  handleMoveColumn: (direction: 'left' | 'right') => void;
  isLeftDisabled: boolean;
  isRightDisabled: boolean;
};

export default function MoveColumnButtons(props: MoveColumnButtonsProps) {
  const { handleMoveColumn, isLeftDisabled, isRightDisabled } = props;

  return (
    <div className={styles.columnOrderButtonsContainer}>
      <button
        type='button'
        className={clsx(styles.columnOrderButton, isLeftDisabled && styles.disabled)}
        onClick={() => handleMoveColumn('left')}
        onKeyDown={(e) => e.key === 'Enter' && !isLeftDisabled && handleMoveColumn('left')}
        disabled={isLeftDisabled}
        tabIndex={isLeftDisabled ? -1 : 0}
        title='Move column left'
        aria-label='Move column left'
      >
        ◀️
      </button>

      <button
        type='button'
        className={clsx(styles.columnOrderButton, isRightDisabled && styles.disabled)}
        onClick={() => handleMoveColumn('right')}
        onKeyDown={(e) => e.key === 'Enter' && !isRightDisabled && handleMoveColumn('right')}
        disabled={isRightDisabled}
        tabIndex={isRightDisabled ? -1 : 0}
        title='Move column right'
        aria-label='Move column right'
      >
        ▶️
      </button>
    </div>
  );
}
