import { AccessorKeyColumnDef, CellContext, ColumnDef } from '@tanstack/react-table';
import ColumnHeader from '../../../../../ColumnHeader';
import IndeterminateCheckbox from '../../../../../IndeterminateCheckbox';
import { RowSelectionMode } from '../../../constants';

type EnrichColumnDefsProps = {
  columnDefsInput: Array<AccessorKeyColumnDef<any, any> | ColumnDef<any>>;
  rowSelectionMode?: RowSelectionMode;
};

export function enrichColumnDefs(props: EnrichColumnDefsProps) {
  const { columnDefsInput, rowSelectionMode } = props;

  return columnDefsInput.map((curItem) => {
    if ((curItem.meta as any)?.addCheckbox) {
      const newItem = {
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
            : curItem.header,
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

      // @ts-ignore
      if (rowSelectionMode === RowSelectionMode.None) delete newItem.cell;

      return newItem;
    }

    return curItem;
  });
}
