import { useState } from 'react';
import clsx from 'clsx';
import { createColumnHelper } from '@tanstack/react-table';
import Button from '../lib/components/Button';
import { Table } from '../lib/main';
import styles from './App.module.scss';
import Input from './components/Input';
import { mockData } from './mockData';
import { THEME } from './utils/constants';
import { extractThemeFromHtmlElement } from './utils/extractThemeFromHtmlElement';

const columnHelper = createColumnHelper<any>();

const columnDefs = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];
// columnDefs={[
//   { accessorKey: 'id', addCheckbox: true },
//   { accessorKey: 'first_name', size: 100 },
//   { accessorKey: 'last_name', size: 100 },
//   { accessorKey: 'email', size: 100 },
//   { accessorKey: 'gender', size: 100 },
//   { accessorKey: 'ip_address', size: 100 },
// ]}

export default function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [isDarkThemeOn, setIsDarkThemeOn] = useState<boolean>(extractThemeFromHtmlElement);

  const handleDarkThemeToggleClick = () => {
    const [htmlElement] = document.getElementsByTagName('html');

    const nextTheme = isDarkThemeOn ? THEME.Light : THEME.Dark;

    htmlElement.setAttribute('data-theme', nextTheme);
    setIsDarkThemeOn((isDarkThemeOn) => !isDarkThemeOn);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkThemeOn ? '#383838' : 'white',
        width: '100%',
        height: '100%',
        padding: 40,
      }}
    >
      <Button onClick={handleDarkThemeToggleClick} className={styles.myThemeToggleButton}>
        Dark Theme {isDarkThemeOn ? THEME.Dark : THEME.Light}
      </Button>

      <Input value={searchText} setValue={setSearchText} placeholder='Search...' />

      <h1>My Table</h1>

      <Table
        data={mockData}
        columnDefs={columnDefs}
        rowSelectionMode='multi'
        searchText={searchText}
        setSearchText={setSearchText}
        className={clsx('private-table', styles.myTable)}
        // defaultColumn={{
        //   enableSorting: true,
        //   // enableMultiSort: true,
        // }}
        // showFooter
        // customTableFooter={TableFooter}
        // initialPageSize={5}
        // onCellClick={(props: any) => console.log('props is:', props)}
      />
    </div>
  );
}
