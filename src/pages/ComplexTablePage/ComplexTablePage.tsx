import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table, RowSelectionMode } from '../../../lib/index.ts';
import { THEME } from '../../common/constants.ts';
import Input from '../../components/Input/index.ts';
import Toggle from '../../components/Toggle/index.ts';
import { mockData } from '../../mockData.ts';
import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext.ts';
import styles from './ComplexTablePage.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function ComplexTablePage() {
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
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
