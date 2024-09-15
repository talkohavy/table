import { ColumnResizeDirection, ColumnResizeMode } from '@tanstack/react-table';

function useColumnResizeHook() {
  return {
    columnsResizeProps: {
      columnResizeMode: 'onChange' as ColumnResizeMode,
      columnResizeDirection: 'ltr' as ColumnResizeDirection,
    },
  };
}

export { useColumnResizeHook };
