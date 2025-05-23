import{r as o,j as s}from"../../main/index-C-V8LVo7.js";import{C as r}from"./CodeBlock.Cj8LsT4-.js";import{m as t}from"./mockData.RkXdFPAn.js";import{T as m,c}from"./Table.CglSOpJy.js";const i="_myTable_ytcpk_1",n={myTable:i},e=c(),u=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function C(){const[a,l]=o.useState({id:!1,first_name:!1});return s.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[s.jsx("div",{className:"w-full",children:s.jsx(m,{data:t,columnDefs:u,visibleColumns:a,onVisibleColumnsChange:l,showColumnsSelector:!0,allowColumnResizing:!0,className:n.myTable})}),s.jsx(r,{language:"typescript",className:"w-full border",code:`import { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '../../../lib';
import { mockData } from '../../mockData.ts';
import styles from './TableWithColumnsSelector.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithColumnsSelector() {
  const [visibleColumns, setVisibleColumns] = useState<{ [key: string]: boolean }>({ id: false, first_name: false });

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          visibleColumns={visibleColumns}
          onVisibleColumnsChange={setVisibleColumns}
          showColumnsSelector
          allowColumnResizing
          className={styles.myTable}
        />
      </div>
    </div>
  );
}`})]})}export{C as default};
//# sourceMappingURL=../../sourcemaps/index.C7FQqKmi.js.map
