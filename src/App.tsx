import clsx from 'clsx';
import { Table } from '../lib/main.js';
import styles from './App.module.scss';
import { mockData } from './mockData.js';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#383838',
        width: '100%',
        height: '100%',
        padding: 40,
      }}
    >
      <h1>My Table</h1>

      <Table
        data={mockData}
        columnDefs={[
          { accessorKey: 'id', addCheckbox: true },
          { accessorKey: 'first_name', size: 100 },
          { accessorKey: 'last_name', size: 100 },
          { accessorKey: 'email', size: 100 },
          { accessorKey: 'gender', size: 100 },
          { accessorKey: 'ip_address', size: 100 },
        ]}
        // searchText='tiny'
        onCellClick={(props: any) => console.log('props is:', props)}
        className={clsx('private-table', styles.myTable)}
      />
    </div>
  );
}
