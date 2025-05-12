import { useState } from 'react';
import clsx from 'clsx';
import { CLASSES } from '../../logic/constants';
import styles from './ColumnVisibilitySlider.module.scss';

type ColumnVisibilitySliderProps = {
  columns: any[];
};

export default function ColumnVisibilitySlider(props: ColumnVisibilitySliderProps) {
  const { columns } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen(!isOpen);

  return (
    <div
      className={clsx(
        CLASSES.columnVisibilitySlider.container,
        styles.sliderContainer,
        isOpen && CLASSES.columnVisibilitySlider.open,
        isOpen && styles.open,
      )}
    >
      <button
        className={clsx(CLASSES.columnVisibilitySlider.toggleButton, styles.toggleButton)}
        onClick={toggleSlider}
        title='Toggle column visibility'
      >
        {isOpen ? '›' : '‹'}
      </button>

      <div className={clsx(CLASSES.columnVisibilitySlider.content, styles.sliderContent)}>
        <h4 className={clsx(CLASSES.columnVisibilitySlider.title, styles.sliderTitle)}>Visible Columns</h4>

        <div className={clsx(CLASSES.columnVisibilitySlider.columnList, styles.columnList)}>
          {columns.map((column) => (
            <div key={column.id} className={clsx(CLASSES.columnVisibilitySlider.columnItem, styles.columnItem)}>
              <label className={clsx(CLASSES.columnVisibilitySlider.columnLabel, styles.columnLabel)}>
                <input
                  type='checkbox'
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                  className={clsx(CLASSES.columnVisibilitySlider.columnCheckbox, styles.columnCheckbox)}
                />

                <span className={clsx(CLASSES.columnVisibilitySlider.columnName, styles.columnName)}>{column.id}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
