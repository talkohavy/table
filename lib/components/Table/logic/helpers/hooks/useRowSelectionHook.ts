import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';
import { ROW_SELECTION_MODES, RowSelectionOptions } from '../../constants';

type UseRowSelectionHookProps = {
  rowSelectionMode?: 'none' | 'single' | 'multi';
};

function useRowSelectionHook(props: UseRowSelectionHookProps) {
  const { rowSelectionMode } = props;

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return {
    rowSelectionState: rowSelection,
    rowSelectionProps: {
      onRowSelectionChange: setRowSelection,
      ...ROW_SELECTION_MODES[rowSelectionMode as RowSelectionOptions],
    },
  };
}

export { useRowSelectionHook };
