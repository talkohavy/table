import{a as c,r as u,j as e,c as s}from"../../main/index-CzHfqaMa.js";import{T as t,m as l}from"./mockData.Cct9k8y-.js";import{C as h}from"./CodeBlock.Dyj-O7sh.js";const g="_myTable_jb3bc_1",a={myTable:g};function p(){const[o,m]=c("persistent-column-sizing",{}),[i,r]=u.useState({});return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-6 size-full p-10",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Table with Persistent Column Widths"}),e.jsxs("div",{className:"w-full",children:[e.jsx("h2",{className:"text-xl mb-2",children:"With Local Storage Persistence"}),e.jsx("p",{className:"mb-4",children:"This table will remember your column widths even after page refresh using localStorage. Try resizing some columns and then refresh the page."}),e.jsx(t,{data:l,allowColumnResizing:!0,initialColumnSizing:o,onColumnSizingChange:m,className:s("persistent-columns-table",a.myTable)})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h2",{className:"text-xl mb-2",children:"Without Persistence (for comparison)"}),e.jsx("p",{className:"mb-4",children:"This table will not persist column widths after refresh."}),e.jsx(t,{data:l,allowColumnResizing:!0,className:s("non-persistent-columns-table",a.myTable)})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h2",{className:"text-xl mb-2",children:"With State Management"}),e.jsx("p",{className:"mb-4",children:"This table uses React state to manage column widths. Column widths will be preserved during this session but lost on refresh."}),e.jsx(t,{data:l,allowColumnResizing:!0,initialColumnSizing:i,onColumnSizingChange:n=>{console.log("value is:",n),r(n)},className:s("state-managed-columns-table",a.myTable)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-xl mb-2",children:"Current Column Sizing State"}),e.jsx("pre",{className:s("p-4 rounded border","bg-gray-100 text-black","dark:bg-gray-800 dark:text-white"),children:JSON.stringify(i,null,2)})]}),e.jsx(h,{className:"w-full border mt-4 shrink-0",language:"typescript",code:`import { useState } from 'react';
import clsx from 'clsx';
import { ColumnSizingState, Table } from '../../../lib';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { mockData } from '../../mockData';
import styles from './TableWithPersistentColumnWidths.module.scss';

export default function TableWithPersistentColumnWidths() {
  const [persistentColumnSizing, setPersistentColumnSizing] = useLocalStorage<ColumnSizingState>(
    'persistent-column-sizing',
    {},
  );

  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

  return (
    <div className='flex flex-col justify-start items-start gap-6 size-full p-10'>
      <h1 className='text-2xl font-bold'>Table with Persistent Column Widths</h1>

      <div className='w-full'>
        <h2 className='text-xl mb-2'>With Local Storage Persistence</h2>
        <p className='mb-4'>
          This table will remember your column widths even after page refresh using localStorage. Try resizing some
          columns and then refresh the page.
        </p>

        <Table
          data={mockData}
          allowColumnResizing
          initialColumnSizing={persistentColumnSizing}
          onColumnSizingChange={setPersistentColumnSizing}
          className={clsx('persistent-columns-table', styles.myTable)}
        />
      </div>

      <div className='w-full'>
        <h2 className='text-xl mb-2'>Without Persistence (for comparison)</h2>
        <p className='mb-4'>This table will not persist column widths after refresh.</p>
        <Table data={mockData} allowColumnResizing className={clsx('non-persistent-columns-table', styles.myTable)} />
      </div>

      <div className='w-full'>
        <h2 className='text-xl mb-2'>With State Management</h2>
        <p className='mb-4'>
          This table uses React state to manage column widths. Column widths will be preserved during this session but
          lost on refresh.
        </p>

        <Table
          data={mockData}
          allowColumnResizing
          initialColumnSizing={columnSizing}
          onColumnSizingChange={(value) => {
            console.log('value is:', value);

            setColumnSizing(value);
          }}
          className={clsx('state-managed-columns-table', styles.myTable)}
        />
      </div>

      <div className='mb-4'>
        <h2 className='text-xl mb-2'>Current Column Sizing State</h2>
        <pre
          className={clsx(
            'p-4 rounded border',
            'bg-gray-100 text-black', // Light mode styles
            'dark:bg-gray-800 dark:text-white', // Dark mode styles
          )}
        >
          {JSON.stringify(columnSizing, null, 2)}
        </pre>
      </div>
    </div>
  );
}
`})]})}export{p as default};
//# sourceMappingURL=../../sourcemaps/index.DfuO7Wqi.js.map
