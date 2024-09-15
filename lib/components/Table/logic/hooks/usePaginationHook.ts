import { ReactNode, useEffect, useState } from 'react';
import { getPaginationRowModel } from '@tanstack/react-table';
import { DEFAULT_PAGE_SIZE } from '../constants';

type UsePaginationHookProps = {
  showFooter?: boolean;
  customTableFooter?: (props: any) => ReactNode;
  initialPageSize?: number;
};

function usePaginationHook(props: UsePaginationHookProps) {
  const { showFooter, customTableFooter, initialPageSize } = props;

  const isPaginationMode = showFooter || customTableFooter || initialPageSize; // <--- if isPagination is false, then it's a case of infinite scroll.

  const [pagination, setPagination] = useState(() => ({
    pageIndex: 0,
    pageSize: isPaginationMode ? (initialPageSize ?? DEFAULT_PAGE_SIZE) : Number.MAX_SAFE_INTEGER,
  }));

  useEffect(() => {
    const newPageSize = isPaginationMode ? (initialPageSize ?? DEFAULT_PAGE_SIZE) : Number.MAX_SAFE_INTEGER;
    setPagination((prevState) => ({ ...prevState, pageSize: newPageSize }));
  }, [isPaginationMode]);

  return {
    paginationState: pagination,
    paginationProps: {
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      autoResetPageIndex: false, // <--- When requesting/fetching a new page with loadMore function, don't reset to page 0 upon successful load!
      // pageCount: 10, // <--- you can hard code your last page number here! Great for dynamic data-fetching tables.
    },
  };
}

export { usePaginationHook };
