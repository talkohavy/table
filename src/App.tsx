import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import { routes } from './routes';

const SimpleTableExamplePage = routes[0].Component;

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route key={-1} path='/' element={<SimpleTableExamplePage />} />

          {routes.map(({ to: path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// import { useMemo, useState } from 'react';
// import clsx from 'clsx';
// import { createColumnHelper } from '@tanstack/react-table';
// import { Table } from '../lib/main';
// import styles from './App.module.scss';
// import Input from './components/Input';
// import Toggle from './components/Toggle';
// import { mockData } from './mockData';
// import { THEME } from './utils/constants';
// import { extractThemeFromHtmlElement } from './utils/extractThemeFromHtmlElement';

// const columnHelper = createColumnHelper<any>();

// const columnDefsRaw = [
//   columnHelper.accessor('id', { header: 'ID', meta: { addCheckbox: true } }),
//   columnHelper.accessor('first_name', { header: 'First Name' }),
//   columnHelper.accessor('last_name', { header: 'Last Name' }),
//   columnHelper.accessor('email', { header: 'Email' }),
//   columnHelper.accessor('gender', { header: 'Gender' }),
//   columnHelper.accessor('ip_address', { header: 'IP Address' }),
// ];

// export default function App() {
//   const [searchText, setSearchText] = useState<string>('');
//   const [isDarkThemeOn, setIsDarkThemeOn] = useState<boolean>(extractThemeFromHtmlElement);
//   const [showFooter, setShowFooter] = useState<boolean>(false);
//   const [isFullSize, setIsFullSize] = useState<boolean>(false);
//   const [isSortingEnabled, setIsSortingEnabled] = useState<boolean>(true);

//   const handleDarkThemeToggleClick = () => {
//     const [htmlElement] = document.getElementsByTagName('html');

//     const nextTheme = isDarkThemeOn ? THEME.Light : THEME.Dark;

//     htmlElement.setAttribute('data-theme', nextTheme);
//     setIsDarkThemeOn((isDarkThemeOn) => !isDarkThemeOn);
//   };

//   const columnDefs = useMemo(
//     () => columnDefsRaw.map((column) => ({ ...column, enableSorting: isSortingEnabled })),
//     [isSortingEnabled],
//   );

//   return (
//     <div
//       className={clsx(
//         'flex flex-col justify-start items-start gap-4 size-full p-10',
//         isDarkThemeOn ? 'bg-[#383838]' : 'bg-white',
//       )}
//     >
//       <div className='border rounded-lg flex w-full'>
//         <div className='flex flex-col justify-between gap-6 items-start p-6'>
//           <div className='flex items-center justify-between gap-4 w-full'>
//             <h2 className='font-medium dark:text-white'>Dark Mode:</h2>

//             <Toggle isChecked={isDarkThemeOn} setIsChecked={handleDarkThemeToggleClick} />
//           </div>

//           <div className='flex items-center justify-start gap-4 w-full'>
//             <h2 className='font-medium dark:text-white'>Show footer:</h2>

//             <Toggle isChecked={showFooter} setIsChecked={() => setShowFooter((prev) => !prev)} />
//           </div>
//         </div>

//         <div className='flex flex-col justify-between gap-6 items-start p-6'>
//           <div className='flex items-center justify-between gap-4 w-full'>
//             <h2 className='font-medium dark:text-white'>Sorting Enabled:</h2>

//             <Toggle isChecked={isSortingEnabled} setIsChecked={() => setIsSortingEnabled((prev) => !prev)} />
//           </div>

//           <div className='flex items-center justify-between gap-4 w-full'>
//             <h2 className='font-medium dark:text-white'>Is Full Size:</h2>

//             <Toggle isChecked={isFullSize} setIsChecked={() => setIsFullSize((prev) => !prev)} />
//           </div>
//         </div>
//       </div>

//       <Input value={searchText} setValue={setSearchText} placeholder='Search...' />

//       <div className='w-full'>
//         <Table
//           data={mockData}
//           columnDefs={columnDefs}
//           rowSelectionMode='multi'
//           showFooter={showFooter}
//           isFullSize={isFullSize}
//           searchText={searchText}
//           setSearchText={setSearchText}
//           className={clsx('private-table', styles.myTable)}
//           // defaultColumn={{
//           //   enableSorting: isSortingEnabled,
//           //   // enableMultiSort: true,
//           // }}
//           // customTableFooter={TableFooter}
//           // initialPageSize={5}
//           onCellClick={(props: any) => console.log('props is:', props)}
//         />
//       </div>
//     </div>
//   );
// }
