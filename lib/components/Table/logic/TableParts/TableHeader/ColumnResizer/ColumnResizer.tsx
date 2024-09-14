import clsx from 'clsx';
import { CLASSES } from '../../../constants';

type ColumnResizerProps = {
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  isResizing: boolean;
};

export default function ColumnResizer(props: ColumnResizerProps) {
  const { onMouseDown, onTouchStart, isResizing } = props;

  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={clsx(CLASSES.resizer, isResizing && CLASSES.isResizing)}
    />
  );
}
