# @talkohavy/table

The most simple Table implementation in the world, that fits 90% of your use-cases.

<p align="center">
  <img src="https://i.ibb.co/n3bF7yS/table-light.png" width="800" alt="table light mode" />
</p>

<p align="center">
  <img src="https://i.ibb.co/hXB4MCf/table-light.png" width="800" alt="table dark mode" />
</p>

## 1. Supported Features

1. Row Virtualization
2. Row selection (Multi & Single)
3. Sticky Headers
4. Sorting (including multi-sort)
5. Column Resizing
6. Group Headers
7. Pagination
8. Infinite scroll
9. onRowClick event
10. Load more data when reaching bottom
11. ⭐️**Highly customizable**⭐️ with custom css hooks for personal styling

## 2. List of known problems

1. **Double-render**. For some reason, row selection has to be a dependency for when calculating _columnDefs_ in order for selected rows which were checked using the checkbox to appear as such in the next render. In the example shown in **@tanstack/table** it seemed like that isn't necessary. Need to check.
2. **Table Width**. Now that Column-Sizing is a built-in feature, need to figure out the best way to handle table width, and how to make it take up the full size of its container. Right now, we've given our users the ability to manually switch between 100% width, and auto width, using a props called `isFullSize`, but that might be changed soon.

## 3. Getting Started

install the package:

```bash
npm install @talkohavy/table
```

import and use the `Table` component like so:

```tsx
import { Table } from '@talkohavy/table';

export const data = [
  {
    id: 1,
    first_name: 'Emlen',
    last_name: 'Orth',
    email: 'eorth0@sohu.com',
    gender: 'Female',
    ip_address: '163.228.179.208',
  },
  {
    id: 2,
    first_name: 'Conrad',
    last_name: 'Liepmann',
    email: 'cliepmann1@tuttocitta.it',
    gender: 'Male',
    ip_address: '225.98.191.215',
  },
  {
    id: 3,
    first_name: 'Magnum',
    last_name: 'Le Brom',
    email: 'mlebrom2@examiner.com',
    gender: 'Male',
    ip_address: '170.255.125.199',
  },
  {
    id: 4,
    first_name: 'Bette',
    last_name: 'Wroughton',
    email: 'bwroughton3@psu.edu',
    gender: 'Female',
    ip_address: '169.143.132.230',
  },
];

export default function App() {
  return (
    <div style={{ width: '100%' }}>
      <Table data={data} />
    </div>
  );
}
```

That's it 🙂

Now, since **Table** is essentially a wrapper around `@tanstack/table`, you can pass columnDefs to it as you normally would:

```tsx
import { Table } from '@talkohavy/table';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

const columnDefs = [
  columnHelper.accessor('id', { header: 'ID' }),
  columnHelper.accessor('first_name', { header: 'First Name', enableSorting: true }),
  columnHelper.accessor('last_name', { header: 'Last Name' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('gender', { header: 'Gender' }),
  columnHelper.accessor('ip_address', { header: 'IP Address' }),
];

export const data = [/* ... data here ...*/];

export default function App() {
  return (
    <div style={{ width: '100%' }}>
      <Table data={data} columnDefs={columnDefs} />
    </div>
  );
}
```

Play around and have fun exploring 🧡

## 4. Table Options

Here's a list of all supported options:

1. `data`
   type: `Array<T>`

   The only mandatory prop which Table requires.

2. `columnDef`
   type: `ColumnDef`

   Exactly what you know about ColumnDef from `@tanstack/table`.

3. `showFooter`
   type: `boolean`

   \* Will be explained in the future \*

4. `rowSelectionMode`
   type: `string`
   Options: 'none' | 'single' | 'multi'

   \* Will be explained in the future \*

5. `isFullSize`
   type: `boolean`

   \* Will be explained in the future \*

6. `searchText`
   type: `string`

   Goes together with `setSearchText`.  
   The data passed to **Table** will be filtered by rows that include `searchText`.  
   \* Will be explained in the future \*

7. `setSearchText`
   type: `(value: any) => void`

   Goes together with `searchText`.

   \* Will be explained in the future \*

8. `defaultColumn`
   type: `Partial<ColumnDef<TData, unknown>>`

   \* Will be explained in the future \*

9. `customTableFooter`
   type: `React Component`

   \* Will be explained in the future \*

10. `initialPageSize`
    type: `number`

    \* Will be explained in the future \*
