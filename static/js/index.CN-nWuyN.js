import{a as l,j as a}from"../../main/index-C-V8LVo7.js";import{C as o}from"./CodeBlock.Cj8LsT4-.js";import{m}from"./mockData.RkXdFPAn.js";import{T as t,c}from"./Table.CglSOpJy.js";const n="_myTable_ytcpk_1",d={myTable:n},e=c(),u=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name",enableSorting:!0}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function b(){const[s,r]=l("table-column-order",["ip_address","email"]);return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(t,{data:m,columnDefs:u,allowColumnReorder:!0,allowColumnResizing:!0,initialColumnOrder:s,onColumnsOrderChange:r,className:d.myTable})}),a.jsx(o,{language:"typescript",className:"w-full border",code:`import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import { useLocalStorage } from '../../hooks/useLocalStorage';
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
  const [columnOrder, setColumnOrder] = useLocalStorage('table-column-order', ['ip_address', 'email']);

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          allowColumnReorder
          allowColumnResizing
          initialColumnOrder={columnOrder}
          onColumnsOrderChange={setColumnOrder}
          className={styles.myTable}
        />
      </div>
    </div>
  );
}`})]})}export{b as default};
//# sourceMappingURL=../../sourcemaps/index.i0tthDyq.js.map
