import { useState } from 'react';
import { ColumnResizeDirection, ColumnResizeMode, ColumnSizingState } from '@tanstack/react-table';

type UseColumnResizeHookProps = {
  allowColumnResizing?: boolean;
  initialColumnSizing?: ColumnSizingState;
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
};

export function useColumnResizeHook(props?: UseColumnResizeHookProps) {
  const { allowColumnResizing = false, initialColumnSizing, onColumnSizingChange } = props ?? {};

  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(initialColumnSizing ?? {});

  const handleColumnSizingChange = (columnSizingUpdater: (prevState: ColumnSizingState) => ColumnSizingState) => {
    const newColumnSizing = columnSizingUpdater(columnSizing);
    setColumnSizing(columnSizingUpdater);
    onColumnSizingChange?.(newColumnSizing);
  };

  return {
    columnSizingState: columnSizing,
    columnsResizeProps: {
      enableColumnResizing: allowColumnResizing, // <--- if not set, defaults to true.
      columnResizeMode: 'onChange' as ColumnResizeMode,
      columnResizeDirection: 'ltr' as ColumnResizeDirection,
      columnSizing,
      onColumnSizingChange: handleColumnSizingChange,
    },
  };
}
