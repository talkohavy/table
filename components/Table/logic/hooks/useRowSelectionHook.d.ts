import { RowSelectionState } from '@tanstack/react-table';
type UseRowSelectionHookProps = {
    rowSelectionMode?: 'none' | 'single' | 'multi';
};
declare function useRowSelectionHook(props: UseRowSelectionHookProps): {
    rowSelectionState: RowSelectionState;
    rowSelectionProps: any;
};
export { useRowSelectionHook };
