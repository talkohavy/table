import { Table } from '../../../lib/main';
import { mockData } from '../../mockData';

export default function TableWithFooterPage() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} showFooter />
      </div>
    </div>
  );
}
