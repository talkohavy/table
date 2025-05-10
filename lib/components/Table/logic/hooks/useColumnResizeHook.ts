import { ColumnResizeDirection, ColumnResizeMode } from '@tanstack/react-table';

export function useColumnResizeHook() {
  return {
    columnsResizeProps: {
      columnResizeMode: 'onChange' as ColumnResizeMode,
      columnResizeDirection: 'ltr' as ColumnResizeDirection,
      // enableColumnResizing: true,
    },
  };
}
