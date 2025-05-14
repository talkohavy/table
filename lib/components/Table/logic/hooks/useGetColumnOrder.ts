import { Table } from '@tanstack/react-table';

type useGetColumnOrderProps = {
  tableInstance: Table<unknown>;
};

export function useGetColumnOrder(props: useGetColumnOrderProps) {
  const { tableInstance } = props;

  const getColumnOrder = () => {
    const currentColumnOrder = tableInstance.getState().columnOrder || [];
    return currentColumnOrder.length
      ? currentColumnOrder
      : tableInstance.getAllLeafColumns().map((column: any) => column.id);
  };

  return getColumnOrder;
}
