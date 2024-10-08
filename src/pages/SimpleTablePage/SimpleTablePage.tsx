import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { createColumnHelper } from '@tanstack/react-table';
import { RowSelectionMode } from '../../../lib/components/Table/types.ts';
import { Table } from '../../../lib/main';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';
import { mockData } from '../../mockData';
import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext.ts';
import { THEME } from '../../utils/constants';
import styles from './SimpleTablePage.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export default function SimpleTablePage() {
  const [searchText, setSearchText] = useState<string>('');
  const { isDarkMode, toggleDarkMode } = useDarkTheme();
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const [isSortingEnabled, setIsSortingEnabled] = useState<boolean>(true);

  const handleDarkThemeToggleClick = () => {
    const [htmlElement] = document.getElementsByTagName('html');

    const nextTheme = isDarkMode ? THEME.Light : THEME.Dark;

    htmlElement.setAttribute('data-theme', nextTheme);
    toggleDarkMode((isDarkThemeOn: boolean) => !isDarkThemeOn);
  };

  const columnDefs = useMemo(
    () => columnDefsRaw.map((column) => ({ ...column, enableSorting: isSortingEnabled })),
    [isSortingEnabled],
  );

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='border rounded-lg flex w-full'>
        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Dark Mode:</h2>

            <Toggle isChecked={isDarkMode} setIsChecked={handleDarkThemeToggleClick} />
          </div>

          <div className='flex items-center justify-start gap-4 w-full'>
            <h2 className='font-medium'>Show footer:</h2>

            <Toggle isChecked={showFooter} setIsChecked={() => setShowFooter((prev) => !prev)} />
          </div>
        </div>

        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Sorting Enabled:</h2>

            <Toggle isChecked={isSortingEnabled} setIsChecked={() => setIsSortingEnabled((prev) => !prev)} />
          </div>
        </div>
      </div>

      <Input value={searchText} setValue={setSearchText} placeholder='Search...' />

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          rowSelectionMode={RowSelectionMode.Multi}
          showFooter={showFooter}
          searchText={searchText}
          setSearchText={setSearchText}
          className={clsx('private-table', styles.myTable)}
          // defaultColumn={{
          //   enableSorting: isSortingEnabled,
          //   // enableMultiSort: true,
          // }}
          // customTableFooter={TableFooter}
          // initialPageSize={5}
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
