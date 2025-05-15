import { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock/CodeBlock.tsx';
import { mockData } from '../../mockData.ts';
import styles from './TableWithColumnsSelector.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithColumnsSelector() {
  const [visibleColumns, setVisibleColumns] = useState<{ [key: string]: boolean }>({ id: false, first_name: false });

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          visibleColumns={visibleColumns}
          onVisibleColumnsChange={setVisibleColumns}
          showColumnsSelector
          className={styles.myTable}
        />
      </div>

      <CodeBlock
        language='typescript'
        className='w-full border'
        code={`import { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableWithColumnsSelector.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithColumnsSelector() {
  const [visibleColumns, setVisibleColumns] = useState<{ [key: string]: boolean }>({ id: false, first_name: false });

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          visibleColumns={visibleColumns}
          onVisibleColumnsChange={setVisibleColumns}
          showColumnsSelector
          className={styles.myTable}
        />
      </div>
    </div>
  );
}`}
      />
    </div>
  );
}
