import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './IndeterminateCheckbox.module.scss';

type IndeterminateCheckboxProps = {
  indeterminate: any;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => any;
};

export default function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
  const { indeterminate, checked, disabled, onChange, className = '', ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      inputRef.current.indeterminate = !checked && indeterminate;
    }
  }, [indeterminate, checked]);

  return (
    <input
      ref={inputRef}
      type='checkbox'
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={clsx(styles.indeterminateCheckbox, className)}
      {...rest}
    />
  );
}
