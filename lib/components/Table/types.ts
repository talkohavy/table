import type { ReactNode } from 'react';
import type { AccessorKeyColumnDef, ColumnDef } from '@tanstack/react-table';
import { RowSelectionMode } from './logic/constants';

export type TableProps<T = any> = {
  data: Array<T>;
  columnDefs?: Array<ColumnDef<T> | AccessorKeyColumnDef<any, any>>;
  defaultColumn?: DefaultColumn;
  rowSelectionMode?: RowSelectionMode;
  searchText?: string;
  onCellClick?: (props: { cell: any; row: any }) => any;
  setSearchText?: (value: any) => void;
  customTableFooter?: (props: any) => ReactNode;
  onBottomReached?: () => void;
  className?: string;
  initialPageSize?: number;
  /**
   * @default false
   */
  showFooter?: boolean;
};

export type DefaultColumn = {
  sortDescFirst?: boolean;
  enableSorting?: boolean;
  enableMultiSort?: boolean;
  enableGlobalFilter?: boolean;
  enableColumnFilter?: boolean;
  enablePinning?: boolean;
  enableGrouping?: boolean;
  enableResizing?: boolean;
};
