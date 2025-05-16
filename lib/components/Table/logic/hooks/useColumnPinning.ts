import { SetStateAction, useState } from 'react';

type UseColumnPinningProps = {
  initialState?: Record<string, boolean>;
  onColumnsPinningChange?: any;
};

/**
 * Currently not using this!
 * Look down below for the usage example
 */
export function useColumnPinning(props?: UseColumnPinningProps) {
  const { initialState = {}, onColumnsPinningChange } = props ?? {};

  const [columnPinning, setColumnPinning] = useState(initialState);

  const handleColumnPinningChange = (cb: (old: any) => void) => {
    setColumnPinning(cb as SetStateAction<Record<string, boolean>>);
    onColumnsPinningChange?.(cb);
  };

  return {
    columnPinningState: columnPinning,
    columnPinningProps: {
      onColumnPinningChange: handleColumnPinningChange,
    },
  };
}
