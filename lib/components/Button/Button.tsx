import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseOver?: () => void;
  disabled?: boolean;
  className?: string;
  style?: any;
  testId?: string;
};

export default function Button(props: ButtonProps) {
  const { children, onClick, onMouseOver, disabled, className, style, testId } = props;

  return (
    <button
      type='button'
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={disabled}
      className={clsx(styles.button, className)}
      style={style}
      data-test-id={`${testId}Button`}
    >
      {children}
    </button>
  );
}
