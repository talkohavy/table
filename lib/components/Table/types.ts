import type { ReactNode } from 'react';
import type { AccessorKeyColumnDef, ColumnDef, ColumnSizingState } from '@tanstack/react-table';
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
  visibleColumns?: any;
  onVisibleColumnsChange?: (value: any) => void;
  /**
   * Optional array of column IDs to set as the default column order.
   * If not provided, the default order will be determined from the order of column definitions.
   */
  defaultColumnOrder?: string[];
  initialColumnOrder?: any;
  onColumnsOrderChange?: (value: any) => void;
  /**
   * @default false
   */
  allowColumnResizing?: boolean;
  /**
   * Initial column sizing state for persisting column widths.
   */
  initialColumnSizing?: ColumnSizingState;
  /**
   * Callback for when column sizing changes.
   */
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
  /**
   * @default false
   */
  showColumnsSelector?: boolean;
  /**
   * @default false
   */
  allowColumnReorder?: boolean;
  /**
   * Whether to animate column order changes.
   *
   * @default true
   */
  shouldAnimate?: boolean;
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
