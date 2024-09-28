import { useState } from 'react';
import clsx from 'clsx';
import { createColumnHelper } from '@tanstack/react-table';
import { RowSelectionMode } from '../../../lib/components/Table/types';
import { Table } from '../../../lib/main';
import Select from '../../components/Select';
import { mockData } from '../../mockData';
import styles from './RowSelectionTablePage.module.scss';

const rowSelectionOptions = [
  { value: RowSelectionMode.Single, label: 'Single' },
  { value: RowSelectionMode.Multi, label: 'Multi' },
  { value: RowSelectionMode.None, label: 'None' },
];

const columnHelper = createColumnHelper<any>();

const columnDefs = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export default function RowSelectionTablePage() {
  const [rowSelectionType, setRowSelectionType] = useState(rowSelectionOptions[0]);

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='flex items-center justify-between gap-4'>
        <div>Row Selection:</div>

        <Select selectedOption={rowSelectionType} setOption={setRowSelectionType} options={rowSelectionOptions} />
      </div>

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          rowSelectionMode={rowSelectionType.value}
          isFullSize
          className={clsx('private-table', styles.myTable)}
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
