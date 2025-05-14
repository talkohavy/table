import { ColumnOrderState, Table } from '@tanstack/react-table';

type UseIsColumnOrderChangedProps = {
  tableInstance: Table<unknown>;
  defaultColumnOrder: ColumnOrderState;
};

export function useIsColumnOrderChanged(props: UseIsColumnOrderChangedProps) {
  const { tableInstance, defaultColumnOrder } = props;

  const isColumnOrderChanged = () => {
    const currentColumnOrder = tableInstance.getState().columnOrder || [];
    if (currentColumnOrder.length === 0) return false;

    const defaultOrder = defaultColumnOrder || [];

    if (currentColumnOrder.length !== defaultOrder.length) return true;

    return currentColumnOrder.some((id: string, index: number) => id !== defaultOrder[index]);
  };

  return { isColumnOrderChanged };
}
