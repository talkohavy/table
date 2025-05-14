import{j as a,c as e}from"../../main/index-DqISpjRh.js";import{T as l,m as s}from"./mockData.CNF2MGZl.js";import{C as t}from"./CodeBlock.CwKnA-sS.js";const m="_myTable_ytcpk_1",o={myTable:m};function f(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(l,{data:s,className:e("private-table",o.myTable)})}),a.jsx(t,{className:"w-full border",language:"typescript",code:`import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
import { mockData } from '../../mockData';
import styles from './SimpleTablePage.module.scss';

export default function SimpleTablePage() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} className={styles.myTable} />
      </div>
    </div>
  );
}
`})]})}export{f as default};
//# sourceMappingURL=../../sourcemaps/index.DMdycm12.js.map
