import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock/CodeBlock.tsx';
import Toggle from '../../components/Toggle/index.ts';
import { mockData } from '../../mockData.ts';
import styles from './TableWithSorting.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name', enableMultiSort: true }),
  columnHelper.accessor('last_name', { header: 'Last Name', enableMultiSort: true }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithSorting() {
  const [isSortingEnabled, setIsSortingEnabled] = useState<boolean>(true);

  const columnDefs = useMemo(
    () => columnDefsRaw.map((column) => ({ ...column, enableSorting: isSortingEnabled })),
    [isSortingEnabled],
  );

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='border rounded-lg flex w-full'>
        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Sorting Enabled:</h2>

            <Toggle isChecked={isSortingEnabled} setIsChecked={() => setIsSortingEnabled((prev) => !prev)} />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Table data={mockData} columnDefs={columnDefs} className={clsx('private-table', styles.myTable)} />
      </div>

      <CodeBlock
        language='typescript'
        className='w-full border'
        code={`import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import Toggle from '../../components/Toggle/index.ts';
import { mockData } from '../../mockData.ts';
import styles from './TableWithSorting.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name', enableMultiSort: true }),
  columnHelper.accessor('last_name', { header: 'Last Name', enableMultiSort: true }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithSorting() {
  const [isSortingEnabled, setIsSortingEnabled] = useState<boolean>(true);

  const columnDefs = useMemo(
    () => columnDefsRaw.map((column) => ({ ...column, enableSorting: isSortingEnabled })),
    [isSortingEnabled],
  );

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='border rounded-lg flex w-full'>
        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Sorting Enabled:</h2>

            <Toggle isChecked={isSortingEnabled} setIsChecked={() => setIsSortingEnabled((prev) => !prev)} />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          className={styles.myTable}
        />
      </div>
    </div>
  );
}
`}
      />
    </div>
  );
}
