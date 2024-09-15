import clsx from 'clsx';
import { CLASSES } from '../../../constants';
import styles from './ColumnResizer.module.scss';

type ColumnResizerProps = {
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  onDoubleClick: React.MouseEventHandler<HTMLDivElement>;
  isResizing: boolean;
};

export default function ColumnResizer(props: ColumnResizerProps) {
  const { onMouseDown, onTouchStart, onDoubleClick, isResizing } = props;

  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onDoubleClick={onDoubleClick}
      className={clsx(CLASSES.resizer, styles.resizer, isResizing && CLASSES.tableColumnIsResizing)}
    />
  );
}
