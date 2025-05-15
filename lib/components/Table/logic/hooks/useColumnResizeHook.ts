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

  const handleColumnSizingChange = (updatedColumnSizing: ColumnSizingState) => {
    setColumnSizing(updatedColumnSizing);
    onColumnSizingChange?.(updatedColumnSizing);
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
