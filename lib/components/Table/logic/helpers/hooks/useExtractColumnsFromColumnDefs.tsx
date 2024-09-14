import { useMemo } from 'react';
import { AccessorKeyColumnDef, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import ColumnHeader from '../ColumnHeader';
import IndeterminateCheckbox from '../IndeterminateCheckbox';

type UseExtractColumnsFromColumnDefsProps = {
  columnDefsInput?: Array<AccessorKeyColumnDef<any, any> | ColumnDef<any>>;
  firstRow: any;
  rowSelectionState: RowSelectionState;
};

function useExtractColumnsFromColumnDefs(props: UseExtractColumnsFromColumnDefsProps) {
  const { columnDefsInput, firstRow, rowSelectionState } = props;

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
          header: (props: any) => (
            <ColumnHeader {...props} {...curItem} header={curItem.header ?? (curItem as any).accessorKey} />
          ),
          cell: ({ row }: any) => (
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
  }, [columnDefsInput, rowSelectionState]);

  return { columns };
}

export { useExtractColumnsFromColumnDefs };
