import { createColumnHelper } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table, RowSelectionMode } from '../../../lib';
import Toggle from '../../components/Toggle';
import { mockData } from '../../mockData';
import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext.ts';
import { THEME } from '../../utils/constants';
import styles from './SimpleTablePage.module.scss';

const columnHelper = createColumnHelper<any>();

const columnDefsRaw = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name' }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address', meta: { className: 'flex-1' } }),
];

export default function SimpleTablePage() {
  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  const handleDarkThemeToggleClick = () => {
    const [htmlElement] = document.getElementsByTagName('html');

    const nextTheme = isDarkMode ? THEME.Light : THEME.Dark;

    htmlElement.setAttribute('data-theme', nextTheme);
    toggleDarkMode((isDarkThemeOn: boolean) => !isDarkThemeOn);
  };

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='border rounded-lg flex w-full'>
        <div className='flex flex-col justify-between gap-6 items-start p-6'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <h2 className='font-medium'>Dark Mode:</h2>

            <Toggle isChecked={isDarkMode} setIsChecked={handleDarkThemeToggleClick} />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Table
          data={mockData}
          columnDefs={columnDefsRaw}
          rowSelectionMode={RowSelectionMode.Multi}
          className={clsx('private-table', styles.myTable)}
        />
      </div>
    </div>
  );
}
