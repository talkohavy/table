import{r as t,j as e,c}from"../../main/index-Dj9nCv4v.js";import{C as n}from"./CodeBlock.mILqvtuj.js";import{c as m,T as i,m as d}from"./mockData.D_FcDWWK.js";import{T as u}from"./Toggle.B983xJk6.js";const p="_myTable_ytcpk_1",f={myTable:p},s=m(),b=[s.accessor("id",{header:"ID",meta:{addCheckbox:!0}}),s.accessor("first_name",{header:"First Name",enableMultiSort:!0}),s.accessor("last_name",{header:"Last Name",enableMultiSort:!0}),s.accessor("email",{header:"Email"}),s.accessor("gender",{header:"Gender"}),s.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function N(){const[l,r]=t.useState(!0),o=t.useMemo(()=>b.map(a=>({...a,enableSorting:l})),[l]);return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsx("div",{className:"border rounded-lg flex w-full",children:e.jsx("div",{className:"flex flex-col justify-between gap-6 items-start p-6",children:e.jsxs("div",{className:"flex items-center justify-between gap-4 w-full",children:[e.jsx("h2",{className:"font-medium",children:"Sorting Enabled:"}),e.jsx(u,{isChecked:l,setIsChecked:()=>r(a=>!a)})]})})}),e.jsx("div",{className:"w-full",children:e.jsx(i,{data:d,columnDefs:o,className:c("private-table",f.myTable),onCellClick:a=>console.log("props is:",a)})}),e.jsx(n,{code:`import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from '../../../lib';
import Toggle from '../../components/Toggle/index.ts';
import { mockData } from '../../mockData.ts';
import styles from './TableWithSorting.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name', enableMultiSort: true }),
  columnHelper.accessor('last_name', { header: 'Last Name', enableMultiSort: true }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function TableWithSorting() {
  const [isSortingEnabled, setIsSortingEnabled] = useState<boolean>(true);

  const columnDefs = useMemo(
    () => columnDefsRaw.map((column) => ({ ...column, enableSorting: isSortingEnabled })),
    [isSortingEnabled],
  );

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='border rounded-lg flex w-full'>
        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Sorting Enabled:</h2>

            <Toggle isChecked={isSortingEnabled} setIsChecked={() => setIsSortingEnabled((prev) => !prev)} />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          className={clsx('private-table', styles.myTable)}
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
`,language:"typescript",className:"w-full border"})]})}export{N as default};
//# sourceMappingURL=index.DzuiM4e_.js.map
