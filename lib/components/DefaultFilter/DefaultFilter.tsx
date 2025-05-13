import { Table } from '@tanstack/react-table';

type DefaultFilterProps = {
  table: Table<unknown>;
  columnId: string;
  getFilterValue: () => any;
  setFilterValue: (updater: any) => void;
};

export default function DefaultFilter(props: DefaultFilterProps) {
  const { table, columnId, getFilterValue, setFilterValue } = props;

  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(columnId);

  const columnFilterValue = getFilterValue();

  return typeof firstValue === 'number' ? (
    <div className='flex gap-2 overflow-auto'>
      <input
        type='number'
        value={columnFilterValue?.[0] ?? ''}
        onChange={(e) => setFilterValue((old: any) => [e.target.value, old?.[1]])}
        placeholder='Min'
        className='w-full max-w-[96px] rounded border shadow'
      />

      <input
        type='number'
        value={columnFilterValue?.[1] ?? ''}
        onChange={(e) => setFilterValue((old: any) => [old?.[0], e.target.value])}
        placeholder='Max'
        className='w-full max-w-[96px] rounded border shadow'
      />
    </div>
  ) : (
    <input
      type='text'
      value={columnFilterValue}
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder='Search...'
      className='w-full max-w-[96px] rounded border px-1 text-black shadow dark:text-white'
    />
  );
}
