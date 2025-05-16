import { useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Table, RowSelectionMode } from '../../../lib';
import { THEME } from '../../common/constants.ts';
import Input from '../../components/Input/index.ts';
import Toggle from '../../components/Toggle/index.ts';
import { mockData } from '../../mockData.ts';
import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext.ts';
import styles from './ComplexTablePage.module.scss';

const includeLeafRows = false;
const includeParentRows = false;

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('pin', {
    id: 'pin',
    header: 'Pin',
    cell: ({ row }) =>
      row.getIsPinned() ? (
        <button onClick={() => row.pin(false, includeLeafRows, includeParentRows)}>❌</button>
      ) : (
        <div style={{ display: 'flex', gap: '4px' }}>
          <button onClick={() => row.pin('top', includeLeafRows, includeParentRows)}>⬆️</button>
          <button onClick={() => row.pin('bottom', includeLeafRows, includeParentRows)}>⬇️</button>
        </div>
      ),
  }),
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
  const [isColumnReorderEnabled, setIsColumnReorderEnabled] = useState<boolean>(true);
  const [isColumnResizingEnabled, setIsColumnResizingEnabled] = useState<boolean>(true);
  const [showColumnsSelector, setShowColumnsSelector] = useState<boolean>(false);

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

          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Column Picker Enabled:</h2>

            <Toggle isChecked={showColumnsSelector} setIsChecked={() => setShowColumnsSelector((prev) => !prev)} />
          </div>
        </div>

        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Column Reorder Enabled:</h2>

            <Toggle
              isChecked={isColumnReorderEnabled}
              setIsChecked={() => setIsColumnReorderEnabled((prev) => !prev)}
            />
          </div>

          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Column Resizing Enabled:</h2>

            <Toggle
              isChecked={isColumnResizingEnabled}
              setIsChecked={() => setIsColumnResizingEnabled((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <Input
        initialValue={searchText}
        onChange={setSearchText}
        placeholder='Search...'
        className='dark:border-white dark:bg-[rgb(23,21,45)]'
      />

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefs}
          rowSelectionMode={RowSelectionMode.Multi}
          showFooter={showFooter}
          searchText={searchText}
          setSearchText={setSearchText}
          showColumnsSelector={showColumnsSelector}
          allowColumnReorder={isColumnReorderEnabled}
          allowColumnResizing={isColumnResizingEnabled}
          className={styles.myTable}
          onCellClick={(props: any) => console.log('props is:', props)}
        />
      </div>
    </div>
  );
}
