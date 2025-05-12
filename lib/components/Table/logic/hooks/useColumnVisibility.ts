import { SetStateAction, useState } from 'react';

type UseColumnVisibilityProps = {
  initialState?: Record<string, boolean>;
  onVisibleColumnsChange?: any;
};

export function useColumnVisibility(props?: UseColumnVisibilityProps) {
  const { initialState = {}, onVisibleColumnsChange } = props ?? {};

  const [columnVisibility, setColumnVisibility] = useState(initialState);

  const handleColumnVisibilityChange = (cb: (old: any) => void) => {
    setColumnVisibility(cb as SetStateAction<Record<string, boolean>>);
    onVisibleColumnsChange?.(cb);
  };

  return {
    columnVisibilityState: columnVisibility,
    columnVisibilityProps: {
      onColumnVisibilityChange: handleColumnVisibilityChange,
    },
  };
}
