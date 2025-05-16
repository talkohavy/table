import{j as a}from"../../main/index-CaVan1kt.js";import{C as s}from"./CodeBlock.D9Wt8C0K.js";import{T as l,c as r,m as c}from"./mockData.CRg01ne-.js";const m="_myTable_ytcpk_1",t={myTable:m},e=r(),o=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function u(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(l,{data:c,columnDefs:o,className:t.myTable})}),a.jsx(s,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
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
`})]})}export{u as default};
//# sourceMappingURL=../../sourcemaps/index.DZseryz5.js.map
