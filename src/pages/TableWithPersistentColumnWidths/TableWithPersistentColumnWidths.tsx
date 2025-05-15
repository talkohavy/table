import { useState } from 'react';
import clsx from 'clsx';
import { ColumnSizingState, Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
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

      <CodeBlock
        className='w-full border mt-4 shrink-0'
        language='typescript'
        code={`import { useState } from 'react';
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
`}
      />
    </div>
  );
}
