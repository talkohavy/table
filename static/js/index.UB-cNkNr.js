import{j as a}from"../../main/index-Dz1ouvEx.js";import{T as e,m as l}from"./mockData.D_xUxETL.js";import{C as s}from"./CodeBlock.EjxIdePH.js";const t="_myTable_ytcpk_1",m={myTable:t};function c(){return a.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[a.jsx("div",{className:"w-full",children:a.jsx(e,{data:l,className:m.myTable})}),a.jsx(s,{className:"w-full border",language:"typescript",code:`import { Table } from '../../../lib';
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
`})]})}export{c as default};
//# sourceMappingURL=../../sourcemaps/index.BePfiP16.js.map
