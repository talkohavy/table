import{r as t,j as e}from"../../main/index-CzHfqaMa.js";import{C as c}from"./CodeBlock.Dyj-O7sh.js";import{c as m,T as n,m as i}from"./mockData.Cct9k8y-.js";import{T as d}from"./Toggle.B4nWTtRs.js";const u="_myTable_ytcpk_1",f={myTable:u},s=m(),p=[s.accessor("id",{header:"ID"}),s.accessor("first_name",{header:"First Name",enableMultiSort:!0}),s.accessor("last_name",{header:"Last Name",enableMultiSort:!0}),s.accessor("email",{header:"Email"}),s.accessor("gender",{header:"Gender"}),s.accessor("ip_address",{header:"IP Address",meta:{className:"flex-1"}})];function S(){const[a,r]=t.useState(!0),o=t.useMemo(()=>p.map(l=>({...l,enableSorting:a})),[a]);return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsx("div",{className:"border rounded-lg flex w-full",children:e.jsx("div",{className:"flex flex-col justify-between gap-6 items-start p-6",children:e.jsxs("div",{className:"flex items-center justify-between gap-4 w-full",children:[e.jsx("h2",{className:"font-medium",children:"Sorting Enabled:"}),e.jsx(d,{isChecked:a,setIsChecked:()=>r(l=>!l)})]})})}),e.jsx("div",{className:"w-full",children:e.jsx(n,{data:i,columnDefs:o,className:f.myTable})}),e.jsx(c,{language:"typescript",className:"w-full border",code:`import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
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
          className={styles.myTable}
        />
      </div>
    </div>
  );
}
`})]})}export{S as default};
//# sourceMappingURL=../../sourcemaps/index.CT3z7dvI.js.map
