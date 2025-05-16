import{j as a}from"../../main/index-CaVan1kt.js";import{C as s}from"./CodeBlock.D9Wt8C0K.js";import{T as l,c as r,m as t}from"./mockData.CRg01ne-.js";const c="_myTable_ytcpk_1",o={myTable:c},e=r(),m=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address"})];function u(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(l,{data:t,columnDefs:m,className:o.myTable})}),a.jsx(s,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
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
`})]})}export{u as default};
//# sourceMappingURL=../../sourcemaps/index.XMRx7WO4.js.map
