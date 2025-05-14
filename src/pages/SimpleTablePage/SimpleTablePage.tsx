import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
import { mockData } from '../../mockData';
import styles from './SimpleTablePage.module.scss';

export default function SimpleTablePage() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} className={clsx('private-table', styles.myTable)} />
      </div>

      <CodeBlock
        className='w-full border'
        language='typescript'
        code={`import clsx from 'clsx';
import { Table } from '../../../lib';
import CodeBlock from '../../components/CodeBlock';
import { mockData } from '../../mockData';
import styles from './SimpleTablePage.module.scss';

export default function SimpleTablePage() {
  return (
    <div className='flex flex-col justify-start items-start gap-4 size-full p-10'>
      <div className='w-full'>
        <Table data={mockData} className={styles.myTable} />
      </div>
    </div>
  );
}
`}
      />
    </div>
  );
}
