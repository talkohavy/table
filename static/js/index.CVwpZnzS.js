import{r,j as s,c as o}from"../../main/index-DqISpjRh.js";import{C as t}from"./CodeBlock.CwKnA-sS.js";import{T as m,c,m as i}from"./mockData.CNF2MGZl.js";const n="_myTable_ytcpk_1",u={myTable:n},e=c(),d=[e.accessor("id",{header:"ID"}),e.accessor("first_name",{header:"First Name"}),e.accessor("last_name",{header:"Last Name"}),e.accessor("email",{header:"Email"}),e.accessor("gender",{header:"Gender"}),e.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function h(){const[a,l]=r.useState({id:!1,first_name:!1});return s.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[s.jsx("div",{className:"w-full",children:s.jsx(m,{data:i,columnDefs:d,visibleColumns:a,onVisibleColumnsChange:l,showColumnsSelector:!0,className:o("private-table",u.myTable)})}),s.jsx(t,{language:"typescript",className:"w-full border",code:`import { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
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
          className={styles.myTable}
        />
      </div>
    </div>
  );
}`})]})}export{h as default};
//# sourceMappingURL=../../sourcemaps/index.CeIidPyn.js.map
