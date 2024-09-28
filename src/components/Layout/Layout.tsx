import type { PropsWithChildren } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className='flex h-full flex-col items-start justify-start dark:text-white'>
      <div className='flex size-full items-center justify-center overflow-auto'>
        <Sidebar />

        <Main>{children}</Main>
      </div>
    </div>
  );
}
