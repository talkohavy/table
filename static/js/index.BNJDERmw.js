import{j as a,c as e}from"../../main/index-B97r20cN.js";import{T as l,m as s}from"./mockData.B44F2Jt1.js";import{C as t}from"./CodeBlock.D7rGVjhl.js";const m="_myTable_ytcpk_1",o={myTable:m};function p(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(l,{data:s,className:e("private-table",o.myTable)})}),a.jsx(t,{className:"w-full border",language:"typescript",code:`import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
import { mockData } from '../../mockData';
import styles from './SimpleTablePage.module.scss';

export default function SimpleTablePage() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} className={clsx('private-table', styles.myTable)} />
      </div>
    </div>
  );
}
`})]})}export{p as default};
//# sourceMappingURL=../../sourcemaps/index.Cs-AAfOa.js.map
