import { useMemo } from 'react';
import { AccessorKeyColumnDef, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { RowSelectionMode } from '../../constants';
import { enrichColumnDefs } from './logic/enrichColumnDefs';
import { getDefaultColumnDefs } from './logic/getDefaultColumnDefs';

type UseExtractColumnsFromColumnDefsProps = {
  columnDefsInput?: Array<AccessorKeyColumnDef<any, any> | ColumnDef<any>>;
  firstRow: any;
  rowSelectionState: RowSelectionState;
  rowSelectionMode?: RowSelectionMode;
};

export function useExtractColumnsFromColumnDefs(props: UseExtractColumnsFromColumnDefsProps) {
  const { columnDefsInput, firstRow, rowSelectionState, rowSelectionMode } = props;

  const columns: any = useMemo(() => {
    if (!columnDefsInput) return getDefaultColumnDefs(firstRow);

    const enrichedColumnDefs = enrichColumnDefs({ columnDefsInput, rowSelectionMode });

    return enrichedColumnDefs;
    // TODO: figure out why does rowSelectionState need to be passed here!
    // Why doesn't it work without it?
  }, [columnDefsInput, rowSelectionMode, rowSelectionState]);

  return { columns };
}
