import { ColumnResizeDirection, ColumnResizeMode } from '@tanstack/react-table';
declare function useColumnResizeHook(): {
    columnsResizeProps: {
        columnResizeMode: ColumnResizeMode;
        columnResizeDirection: ColumnResizeDirection;
    };
};
export { useColumnResizeHook };
