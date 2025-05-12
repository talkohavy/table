import{j as e,c as m,r as f}from"../../main/index-DUBn0mSI.js";import{R as r,T as S,c as b,m as w}from"./mockData.W7-vY6OD.js";import{C as v}from"./CodeBlock.DvFQCSYN.js";function x(l){const{selectedOption:s,setOption:a,options:n,className:d}=l;return e.jsx("select",{value:s.value,onChange:t=>{const c=t.target.value,p=n.find(u=>u.value.toString()===c.toString());a(p)},className:m("h-8 cursor-pointer bg-inherit rounded-md border p-1 hover:border-blue-400 focus:border-blue-600",d),children:n.map(({value:t,label:c})=>e.jsx("option",{value:t,children:c},t))})}const h="_myTable_ytcpk_1",y={myTable:h},i=[{value:r.Single,label:"Single"},{value:r.Multi,label:"Multi"},{value:r.None,label:"None"}],o=b(),g=[o.accessor("id",{header:"ID",meta:{addCheckbox:!0}}),o.accessor("first_name",{header:"First Name"}),o.accessor("last_name",{header:"Last Name"}),o.accessor("email",{header:"Email"}),o.accessor("gender",{header:"Gender"}),o.accessor("ip_address",{header:"IP Address"})];function R(){const[l,s]=f.useState(i[0]);return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("div",{children:"Row Selection:"}),e.jsx(x,{selectedOption:l,setOption:s,options:i})]}),e.jsx("div",{className:"w-full",children:e.jsx(S,{data:w,columnDefs:g,rowSelectionMode:l.value,className:m("private-table",y.myTable),onCellClick:a=>console.log("props is:",a)})}),e.jsx(v,{language:"typescript",className:"w-full border",code:`import { useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table, RowSelectionMode } from '../../../lib';
import Select from '../../components/Select';
import { mockData } from '../../mockData';
import styles from './RowSelectionTablePage.module.scss';

const rowSelectionOptions = [
  { value: RowSelectionMode.Single, label: 'Single' },
  { value: RowSelectionMode.Multi, label: 'Multi' },
  { value: RowSelectionMode.None, label: 'None' },
];

const columnHelper = createColumnHelper<any>();

const columnDefs = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export default function RowSelectionTablePage() {
  const [rowSelectionType, setRowSelectionType] = useState(rowSelectionOptions[0]);

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='flex items-center justify-between gap-4'>
        <div>Row Selection:</div>

        <Select selectedOption={rowSelectionType} setOption={setRowSelectionType} options={rowSelectionOptions} />
      </div>

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          rowSelectionMode={rowSelectionType.value}
          className={clsx('private-table', styles.myTable)}
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
`})]})}export{R as default};
//# sourceMappingURL=index.DwesFtV3.js.map
