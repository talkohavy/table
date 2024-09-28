import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';

type Option = { value: string | number; label: ReactNode };

type SelectProps = {
  selectedOption: Option;
  setOption: (value: Option) => void;
  options: Array<Option>;
  className?: string;
};

export default function Select(props: SelectProps) {
  const { selectedOption, setOption, options, className } = props;

  return (
    <select
      value={selectedOption.value}
      onChange={(e) => {
        const selectedValue = e.target.value;
        const selectedOption = options.find((option) => option.value.toString() === selectedValue.toString())!;

        setOption(selectedOption);
      }}
      className={clsx(styles.select, className)}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
