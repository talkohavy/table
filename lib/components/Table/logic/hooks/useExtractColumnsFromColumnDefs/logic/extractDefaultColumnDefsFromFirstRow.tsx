import ColumnHeader from '../../../../../ColumnHeader';

export function extractDefaultColumnDefsFromFirstRow(firstRow: any) {
  const autoColumnDefs = [];
  for (const key in firstRow) {
    autoColumnDefs.push({
      accessorKey: key,
      header: (props: any) => <ColumnHeader {...props} header={key} showCheckbox={false} />,
    });
  }

  return autoColumnDefs;
}
