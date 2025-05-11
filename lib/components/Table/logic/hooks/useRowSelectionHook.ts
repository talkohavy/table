import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { ROW_SELECTION_MODES, RowSelectionMode } from '../constants';

type UseRowSelectionHookProps = {
  rowSelectionMode: RowSelectionMode;
};

export function useRowSelectionHook(props: UseRowSelectionHookProps) {
  const { rowSelectionMode } = props;

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return {
    rowSelectionState: rowSelection,
    rowSelectionProps: {
      onRowSelectionChange: setRowSelection,
      ...ROW_SELECTION_MODES[rowSelectionMode],
    },
  };
}
