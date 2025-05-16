import { useState } from 'react';
import { Row, RowPinningState } from '@tanstack/react-table';

type UseRowPinningProps = {
  /**
   * The initial column order state to use. If provided, this takes precedence over defaultOrder.
   * This represents a user's previously saved column order.
   */
  initialPinnedRows?: RowPinningState;
  /**
   * Callback function triggered when column order changes
   */
  onPinnedRowsChange?: (pinnedRows: any) => RowPinningState;
};

export function useRowPinning(props?: UseRowPinningProps) {
  const { initialPinnedRows = {}, onPinnedRowsChange } = props ?? {};

  const [pinnedRows, setPinnedRows] = useState<RowPinningState>(initialPinnedRows);

  const handlePinnedRowsChange = (pinnedRowsUpdater: (prevState: RowPinningState) => RowPinningState) => {
    setPinnedRows(pinnedRowsUpdater);
    onPinnedRowsChange?.(pinnedRowsUpdater);
  };

  return {
    rowPinningState: pinnedRows,
    rowPinningProps: {
      onRowPinningChange: handlePinnedRowsChange,
      getSubRows: (row: Row<any>) => row.subRows,
      keepPinnedRows: true, // <--- keep pinned rows across pages
    },
  };
}
