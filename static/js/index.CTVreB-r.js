import{j as e}from"../../main/index-CFuHQmjs.js";import{C as r}from"./CodeBlock.oeIjWIUR.js";import{T as t,c as o,m as n}from"./mockData.C2-WF-lv.js";const m="_myTable_ytcpk_1",i={myTable:m},l=!1,c=!1,s=o(),d=[s.accessor("pin",{id:"pin",header:"Pin",cell:({row:a})=>a.getIsPinned()?e.jsx("button",{onClick:()=>a.pin(!1,l,c),children:"❌"}):e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("button",{onClick:()=>a.pin("top",l,c),children:"⬆️"}),e.jsx("button",{onClick:()=>a.pin("bottom",l,c),children:"⬇️"})]})}),s.accessor("id",{header:"ID"}),s.accessor("first_name",{header:"First Name"}),s.accessor("last_name",{header:"Last Name"}),s.accessor("email",{header:"Email"}),s.accessor("gender",{header:"Gender"}),s.accessor("ip_address",{header:"IP Address"})];function h(){return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsx("div",{className:"w-full",children:e.jsx(t,{data:n,columnDefs:d,className:i.myTable})}),e.jsx(r,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
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
`})]})}export{h as default};
//# sourceMappingURL=../../sourcemaps/index.ClSKJ1kl.js.map
