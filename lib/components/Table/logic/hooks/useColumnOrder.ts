import { SetStateAction, useMemo, useState } from 'react';
import { ColumnOrderState } from '@tanstack/react-table';

type UseColumnOrderProps = {
  /**
   * The initial column order state to use. If provided, this takes precedence over defaultOrder.
   * This represents a user's previously saved column order.
   */
  initialColumnOrder?: ColumnOrderState;
  /**
   * Callback function triggered when column order changes
   */
  onColumnsOrderChange?: any;
  /**
   * The default column order to use when no initialColumnOrder is provided.
   * This represents the natural/default order of columns before any user interaction.
   */
  customDefaultColumnOrder?: ColumnOrderState;
  columns: any;
};

export function useColumnOrder(props?: UseColumnOrderProps) {
  const { initialColumnOrder, onColumnsOrderChange, columns, customDefaultColumnOrder } = props ?? {};

  const defaultColumnOrder = useMemo(() => {
    if (customDefaultColumnOrder) return customDefaultColumnOrder;

    return columns.map((col: any) => col.accessorKey);
  }, [columns, customDefaultColumnOrder]);

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumnOrder ?? defaultColumnOrder);

  const handleColumnOrderChange = (cb: (old: any) => void) => {
    setColumnOrder(cb as SetStateAction<ColumnOrderState>);
    onColumnsOrderChange?.(cb);
  };

  return {
    columnOrderState: columnOrder,
    columnOrderProps: {
      onColumnOrderChange: handleColumnOrderChange,
    },
    defaultColumnOrder,
  };
}
