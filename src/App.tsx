import { Table } from '../lib/main.js';
import styles from './App.module.scss';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: 40,
      }}
    >
      <h1>My Table</h1>

      <Table
        data={[
          { firstName: 'tal', lastName: 'kohavy', age: 28 },
          { firstName: 'tania', lastName: 'kohavy', age: 22 },
          { firstName: 'daniel', lastName: 'kohavy', age: 26 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
          { firstName: 'netanel', lastName: 'bonomo haimovich1', age: 31 },
        ]}
        columnDefs={[
          { accessorKey: 'id', addCheckbox: true },
          { accessorKey: 'firstName' },
          { accessorKey: 'lastName' },
        ]}
        className={styles.myTable}
      />
    </div>
  );
}
