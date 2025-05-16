import { useMemo, useState } from 'react';
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
  onColumnsOrderChange?: (columnOrder: any) => void;
  /**
   * The default column order to use when no initialColumnOrder is provided.
   * This represents the natural/default order of columns before any user interaction.
   */
  customDefaultColumnOrder?: ColumnOrderState;
  columns: any;
};

export function useColumnOrder(props?: UseColumnOrderProps) {
  const { initialColumnOrder, onColumnsOrderChange, columns, customDefaultColumnOrder } = props ?? {};

  const validatedInitialColumnOrder = useMemo(() => {
    if (!initialColumnOrder) return undefined;

    const allColumnIds = columns.map((col: any) => col.accessorKey);
    const validColumnIdsSet = new Set(allColumnIds);
    const filteredColumnOrder = initialColumnOrder.filter((id: string) => validColumnIdsSet.has(id));
    const initialOrderSet = new Set(filteredColumnOrder); // <--- for a quick lookup
    const validatedOrder = [...filteredColumnOrder];

    allColumnIds.forEach((id: string) => {
      if (!initialOrderSet.has(id)) validatedOrder.push(id);
    });

    return validatedOrder;
  }, [initialColumnOrder, columns]);

  const defaultColumnOrder = useMemo(() => {
    if (customDefaultColumnOrder) return customDefaultColumnOrder;

    return columns.map((col: any) => col.accessorKey);
  }, [columns, customDefaultColumnOrder]);

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(validatedInitialColumnOrder ?? defaultColumnOrder);

  const handleColumnOrderChange = (columnOrderUpdater: (prevState: ColumnOrderState) => ColumnOrderState) => {
    setColumnOrder(columnOrderUpdater);
    onColumnsOrderChange?.(columnOrderUpdater);
  };

  return {
    columnOrderState: columnOrder,
    columnOrderProps: {
      onColumnOrderChange: handleColumnOrderChange,
    },
    defaultColumnOrder,
  };
}
