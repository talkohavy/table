import { useCallback, useMemo, useState } from 'react';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
import { generateMockData } from './logic/utils/generateMockData';
import styles from './TableWithInfiniteScroll.module.scss';

export default function TableWithInfiniteScroll() {
  const [data, setData] = useState(() => generateMockData(1, 20));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNextPage = () => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      // If we already have a lot of data, let's stop loading more
      if (data.length >= 100) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      // Generate the next batch of data
      const newData = generateMockData(data.length + 1, 10);
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    }, 800);
  };

  const handleBottomReached = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    fetchNextPage();
  }, [data.length, isLoading, hasMore]);

  const columnDefs = useMemo(
    () => [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'first_name', header: 'First Name' },
      { accessorKey: 'last_name', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'gender', header: 'Gender' },
      { accessorKey: 'ip_address', header: 'IP Address' },
    ],
    [],
  );

  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <h1 className='text-2xl font-bold'>Table with Infinite Scroll</h1>

      <div className='flex flex-col gap-2 w-full'>
        <p>
          This example demonstrates using the <code>onBottomReached</code> feature to implement infinite scrolling. When
          the user scrolls to the bottom of the table, more data is loaded automatically.
        </p>

        <p>
          Current records: {data.length} {!hasMore && '(max reached)'}
        </p>
      </div>

      <div className='relative w-full'>
        <Table data={data} columnDefs={columnDefs} className={styles.myTable} onBottomReached={handleBottomReached} />

        {isLoading && (
          <div className={styles.spinnerContainer}>
            <p className={styles.spinner}></p>
          </div>
        )}
      </div>

      <CodeBlock
        className='w-full border mt-4'
        language='typescript'
        code={`import { useCallback, useMemo, useState } from 'react';
import { Table } from '../../../lib';

const generateMockData = (startId, count) => {
  // ... implementation omitted for brevity
};

export default function TableWithInfiniteScroll() {
  // Start with an initial batch of 20 records
  const [data, setData] = useState(() => generateMockData(1, 20));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  // Simulating loading more data when bottom is reached
  const handleBottomReached = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // If we already have a lot of data, let's stop loading more
      if (data.length >= 100) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }
      
      // Generate the next batch of data
      const newData = generateMockData(data.length + 1, 10);
      setData(prevData => [...prevData, ...newData]);
      setIsLoading(false);
    }, 800); // Simulate network delay
  }, [data.length, isLoading, hasMore]);

  // Column definitions
  const columnDefs = useMemo(() => [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'first_name', header: 'First Name' },
    // ... other columns
  ], []);

  return (
    <div>
      <Table 
        data={data} 
        columnDefs={columnDefs}
        onBottomReached={handleBottomReached}
      />
      {isLoading && <p>Loading more data...</p>}
    </div>
  );
}`}
      />
    </div>
  );
}
