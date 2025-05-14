import{j as a,c as s}from"../../main/index-BmCzqAVx.js";import{C as l}from"./CodeBlock.D2unsg0u.js";import{T as r,c,m}from"./mockData.BiWaj94R.js";const t="_myTable_ytcpk_1",o={myTable:t},e=c(),n=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function f(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(r,{data:m,columnDefs:n,className:s("private-table",o.myTable)})}),a.jsx(l,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableWithCustomColumns.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithCustomColumns() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          className={styles.myTable}
        />
      </div>
    </div>
  );
}
`})]})}export{f as default};
//# sourceMappingURL=../../sourcemaps/index.BeS0vGZY.js.map
