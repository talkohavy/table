import { useMemo } from 'react';
import { AccessorKeyColumnDef, CellContext, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import ColumnHeader from '../../../ColumnHeader';
import IndeterminateCheckbox from '../../../IndeterminateCheckbox';
import { RowSelectionMode } from '../constants';

type UseExtractColumnsFromColumnDefsProps = {
  columnDefsInput?: Array<AccessorKeyColumnDef<any, any> | ColumnDef<any>>;
  firstRow: any;
  rowSelectionState: RowSelectionState;
  rowSelectionMode?: RowSelectionMode;
};

export function useExtractColumnsFromColumnDefs(props: UseExtractColumnsFromColumnDefsProps) {
  const { columnDefsInput, firstRow, rowSelectionState, rowSelectionMode } = props;

  const columns: any = useMemo(() => {
    if (!columnDefsInput) {
      if (!firstRow || typeof firstRow !== 'object') return [];

      const autoColumnDefs = [];
      for (const key in firstRow) {
        autoColumnDefs.push({
          accessorKey: key,
          header: (props: any) => <ColumnHeader {...props} header={key} showCheckbox={false} />,
        });
      }

      return autoColumnDefs;
    }

    return columnDefsInput.map((curItem) => {
      if ((curItem.meta as any)?.addCheckbox)
        return {
          ...curItem,
          header:
            rowSelectionMode === RowSelectionMode.Multi
              ? (props: any) => (
                  <ColumnHeader
                    {...props}
                    {...curItem}
                    header={curItem.header ?? (curItem as AccessorKeyColumnDef<any, any>).accessorKey}
                  />
                )
              : undefined,
          cell: ({ row }: CellContext<any, any>) => (
            <div style={{ padding: 4 }}>
              <IndeterminateCheckbox
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                indeterminate={row.getIsSomeSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            </div>
          ),
        };

      return curItem;
    });
  }, [columnDefsInput, rowSelectionState, rowSelectionMode]);

  return { columns };
}
