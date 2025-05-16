import{j as e}from"../../main/index-Ca_o3E2Y.js";import{C as n}from"./CodeBlock.C7RpMmGB.js";import{T as t,c,m as r}from"./mockData.BcO7UL4j.js";const i="_myTable_ytcpk_1",d={myTable:i},l=!1,o=!1,s=c(),m=[s.accessor("pin",{id:"pin",header:"Pin",cell:({row:a})=>a.getIsPinned()?e.jsx("button",{onClick:()=>a.pin(!1,l,o),children:"❌"}):e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("button",{onClick:()=>a.pin("top",l,o),children:"⬆️"}),e.jsx("button",{onClick:()=>a.pin("bottom",l,o),children:"⬇️"})]})}),s.accessor("id",{header:"ID"}),s.accessor("first_name",{header:"First Name"}),s.accessor("last_name",{header:"Last Name"}),s.accessor("email",{header:"Email"}),s.accessor("gender",{header:"Gender"}),s.accessor("ip_address",{header:"IP Address"})];function b(){return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsx("div",{className:"w-full",children:e.jsx(t,{data:r,columnDefs:m,className:d.myTable})}),e.jsx(n,{language:"typescript",className:"w-full",code:`import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
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
    </div>
  );
}
`})]})}export{b as default};
//# sourceMappingURL=../../sourcemaps/index.CFJ-z0-t.js.map
