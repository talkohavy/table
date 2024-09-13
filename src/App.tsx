import { useState } from 'react';
import clsx from 'clsx';
import Button from '../lib/components/Button/Button.js';
import { Table, TableFooter } from '../lib/main.js';
import styles from './App.module.scss';
import { mockData } from './mockData.js';

enum THEME {
  Dark = 'dark',
  Light = 'light',
}

export default function App() {
  const [isDarkThemeOn, setIsDarkThemeOn] = useState<boolean>();

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
        showFooter
        customTableFooter={TableFooter}
        initialPageSize={10}
        rowSelectionMode='multi'
        onCellClick={(props: any) => console.log('props is:', props)}
        className={clsx('private-table', styles.myTable)}
      />
    </div>
  );
}
