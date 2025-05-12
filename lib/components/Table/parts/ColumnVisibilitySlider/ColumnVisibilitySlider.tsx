import { useState } from 'react';
import clsx from 'clsx';
import styles from './ColumnVisibilitySlider.module.scss';

type ColumnVisibilitySliderProps = {
  columns: any[];
};

export default function ColumnVisibilitySlider(props: ColumnVisibilitySliderProps) {
  const { columns } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen(!isOpen);

  return (
    <div className={clsx(styles.sliderContainer, isOpen && styles.open)}>
      <button className={styles.toggleButton} onClick={toggleSlider} title='Toggle column visibility'>
        {isOpen ? '›' : '‹'}
      </button>

      <div className={styles.sliderContent}>
        <h4 className={styles.sliderTitle}>Visible Columns</h4>

        <div className={styles.columnList}>
          {columns.map((column) => (
            <div key={column.id} className={styles.columnItem}>
              <label className={styles.columnLabel}>
                <input
                  type='checkbox'
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                  className={styles.columnCheckbox}
                />
                <span className={styles.columnName}>{column.id}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
