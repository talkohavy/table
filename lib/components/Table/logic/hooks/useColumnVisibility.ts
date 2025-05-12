import { useState } from 'react';

type UseColumnVisibilityProps = {
  initialState?: Record<string, boolean>;
};

export function useColumnVisibility(props?: UseColumnVisibilityProps) {
  const { initialState = {} } = props ?? {};

  const [columnVisibility, setColumnVisibility] = useState(initialState);

  return {
    columnVisibilityState: columnVisibility,
    columnVisibilityProps: {
      onColumnVisibilityChange: setColumnVisibility,
    },
  };
}
