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
6. Column Ordering
7. Column Picker
8. Column stretching to fill the container's width
9. Group Headers
10. Pagination
11. Infinite scroll
12. onRowClick event
13. Load more data when reaching bottom
14. ⭐️**Highly customizable**⭐️ with custom css hooks for personal styling

## 2. Getting Started

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

## 3. Table Options

Here's a list of all supported options:

1. `data`
   type: `Array<T>`

   The only mandatory prop which Table requires.

2. `columnDefs`
   type: `Array<ColumnDef<T> | AccessorKeyColumnDef<any, any>>`

   Exactly what you know about ColumnDef from `@tanstack/table`.

3. `showFooter`
   type: `boolean`
   default: `false`

   Whether to show the table footer containing pagination controls.

4. `rowSelectionMode`
   type: `enum: 'none' | 'single' | 'multi'`
   default: `'none'`

   Controls the row selection behavior:

   - `'none'`: No row selection enabled
   - `'single'`: Only one row can be selected at a time
   - `'multi'`: Multiple rows can be selected at once

5. `searchText`
   type: `string`

   Text to filter the table rows. Works with `setSearchText`.

6. `setSearchText`
   type: `(value: any) => void`

   Callback to update the search text.

7. `defaultColumn`
   type: `Partial<ColumnDef<TData, unknown>>`

   Default configuration for all columns. This can include settings like:

   ```ts
   {
     sortDescFirst: boolean; // Default sorting direction
     enableSorting: boolean; // Enable sorting on all columns
     enableMultiSort: boolean; // Enable multi-column sorting
     enableGlobalFilter: boolean; // Enable global filtering
     enableColumnFilter: boolean; // Enable per-column filtering
     enablePinning: boolean; // Enable column pinning
     enableGrouping: boolean; // Enable grouping
     enableResizing: boolean; // Enable column resizing
   }
   ```

8. `customTableFooter`
   type: `(props: any) => ReactNode`

   Custom React component to render as the table footer. Receives table instance and pagination state as props.

9. `initialPageSize`
   type: `number`
   default: `10`

   Initial number of rows to display per page.

10. `onCellClick`
    type: `(props: { cell: any; row: any }) => any`

    Callback fired when a cell is clicked. Receives the cell and row objects.

11. `className`
    type: `string`

    CSS class to apply to the table wrapper.

12. `onBottomReached`
    type: `() => void`

    Callback fired when the user scrolls to the bottom of the table. Useful for implementing infinite scroll.

13. `visibleColumns`
    type: `{ [columnId: string]: boolean }`

    Object mapping column IDs to visibility state. Controls which columns are visible.

14. `onVisibleColumnsChange`
    type: `(value: any) => void`

    Callback fired when column visibility changes.

15. `showColumnsSelector`
    type: `boolean`
    default: `false`

    Whether to show the column visibility toggle menu.

16. `allowColumnReorder`
    type: `boolean`
    default: `false`

    Whether to allow columns to be reordered by the user.

17. `shouldAnimate`
    type: `boolean`
    default: `true`

    Whether to animate column reordering.

18. `defaultColumnOrder`
    type: `string[]`

    Optional array of column IDs to set as the default column order. If not provided, the default order will be determined from the order of column definitions.

19. `initialColumnOrder`
    type: `ColumnOrderState`

    Initial state for column ordering. This takes precedence over defaultColumnOrder and represents a user's previously saved column order.

20. `onColumnsOrderChange`
    type: `(value: any) => void`

    Callback fired when column order changes.
