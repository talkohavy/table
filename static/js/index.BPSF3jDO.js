import{j as a}from"../../main/index-C-V8LVo7.js";import{m as e}from"./mockData.RkXdFPAn.js";import{T as l}from"./Table.CglSOpJy.js";import{C as s}from"./CodeBlock.Cj8LsT4-.js";const t="_myTable_ytcpk_1",m={myTable:t};function f(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(l,{data:e,className:m.myTable})}),a.jsx(s,{className:"w-full border",language:"typescript",code:`import { Table } from '../../../lib';
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
//# sourceMappingURL=../../sourcemaps/index.vX9-kAcW.js.map
