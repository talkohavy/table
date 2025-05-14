import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock/CodeBlock.tsx';
import { mockData } from '../../mockData.ts';
import styles from './TableReorderColumns.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name', enableSorting: true }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableReorderColumns() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          allowColumnReorder
          className={clsx('private-table', styles.myTable)}
        />
      </div>

      <CodeBlock
        language='typescript'
        className='w-full border'
        code={`import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableReorderColumns.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name', meta: { className: 'flex-1' } }),
  columnHelper.accessor('last_name', { header: 'Last Name', enableSorting: true, meta: { className: 'flex-1' } }),
  columnHelper.accessor('email', { header: 'Email', meta: { className: 'flex-1' } }),
  columnHelper.accessor('gender', { header: 'Gender', meta: { className: 'flex-1' } }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableReorderColumns() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          allowColumnReorder
          className={clsx('private-table', styles.myTable)}
        />
      </div>
    </div>
  );
}`}
      />
    </div>
  );
}
