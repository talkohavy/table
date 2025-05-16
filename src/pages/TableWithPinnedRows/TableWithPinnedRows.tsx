import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib/index.ts';
import CodeBlock from '../../components/CodeBlock/CodeBlock.tsx';
import { mockData } from '../../mockData.ts';
import styles from './TableWithPinnedRows.module.scss';

const includeLeafRows = false;
const includeParentRows = false;

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('pin', {
    id: 'pin',
    header: 'Pin',
    cell: ({ row }) =>
      row.getIsPinned() ? (
        <button onClick={() => row.pin(false, includeLeafRows, includeParentRows)}>❌</button>
      ) : (
        <div style={{ display: 'flex', gap: '4px' }}>
          <button onClick={() => row.pin('top', includeLeafRows, includeParentRows)}>⬆️</button>
          <button onClick={() => row.pin('bottom', includeLeafRows, includeParentRows)}>⬇️</button>
        </div>
      ),
  }),
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export default function TableWithPinnedRows() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} columnDefs={columnDefsRaw} className={styles.myTable} />
      </div>

      <CodeBlock
        language='typescript'
        className='w-full border'
        code={`import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableWithCustomTitles.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export default function TableWithCustomTitles() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} columnDefs={columnDefsRaw} className={styles.myTable} />
      </div>
    </div>
  );
}
`}
      />
    </div>
  );
}
