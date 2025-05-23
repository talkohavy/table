import{j as a}from"../../main/index-C-V8LVo7.js";import{C as s}from"./CodeBlock.Cj8LsT4-.js";import{m as l}from"./mockData.RkXdFPAn.js";import{T as r,c as m}from"./Table.CglSOpJy.js";const c="_myTable_ytcpk_1",o={myTable:c},e=m(),t=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function f(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(r,{data:l,allowColumnResizing:!0,columnDefs:t,className:o.myTable})}),a.jsx(s,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableWithColumnResizing.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithColumnResizing() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} allowColumnResizing columnDefs={columnDefsRaw} className={styles.myTable} />
      </div>
    </div>
  );
}
`})]})}export{f as default};
//# sourceMappingURL=../../sourcemaps/index.DpwZt7CJ.js.map
