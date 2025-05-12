import { SetStateAction, useState } from 'react';
import { ColumnOrderState } from '@tanstack/react-table';

type UseColumnOrderProps = {
  initialState?: ColumnOrderState;
  onColumnsOrderChange?: any;
};

export function useColumnOrder(props?: UseColumnOrderProps) {
  const { initialState = [], onColumnsOrderChange } = props ?? {};

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialState);

  const handleColumnOrderChange = (cb: (old: any) => void) => {
    setColumnOrder(cb as SetStateAction<ColumnOrderState>);
    onColumnsOrderChange?.(cb);
  };

  return {
    columnOrderState: columnOrder,
    columnOrderProps: {
      onColumnOrderChange: handleColumnOrderChange,
    },
  };
}
