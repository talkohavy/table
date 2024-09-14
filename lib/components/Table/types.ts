import type { ReactNode } from 'react';
import type { ColumnDef } from '@tanstack/react-table';

type DefaultColumn = {
  sortDescFirst?: boolean;
  enableSorting?: boolean;
  enableMultiSort?: boolean;
  enableGlobalFilter?: boolean;
  enableColumnFilter?: boolean;
  enablePinning?: boolean;
  enableGrouping?: boolean;
  enableResizing?: boolean;
};

type BasicTable<T> = {
  data: Array<T>;
  columnDefs?: Array<ColumnDef<T>>;
  defaultColumn?: DefaultColumn;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  sorting?: any;
  setSorting?: any;
  searchText?: string;
  onCellClick?: (data: any) => void;
  setSearchText?: (value: any) => void;
  renderTableFooter?: (props: any) => ReactNode;
  onBottomReached?: () => void;
  isFetching?: boolean;
  isLoading?: boolean;
  className?: string;
  totalItemsLoadedCount?: number;
  totalItemsOverallCount?: number;
  initialPageSize?: number;
};

export type { BasicTable, DefaultColumn };
