import{j as a,c as s}from"../../main/index-DhJ74Be5.js";import{C as l}from"./CodeBlock.C_hK0vxD.js";import{T as o,R as r,c as t,m as c}from"./mockData.CzdxUWDV.js";const m="_myTable_ytcpk_1",i={myTable:m},e=t(),n=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function f(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(o,{data:c,columnDefs:n,rowSelectionMode:r.Multi,className:s("private-table",i.myTable)})}),a.jsx(l,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table, RowSelectionMode } from '../../../lib/index.ts';
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
          rowSelectionMode={RowSelectionMode.Multi}
          className={clsx('private-table', styles.myTable)}
        />
      </div>
    </div>
  );
}
`})]})}export{f as default};
//# sourceMappingURL=../../sourcemaps/index.CFzz_Q2I.js.map
