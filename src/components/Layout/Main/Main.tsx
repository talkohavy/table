import type { PropsWithChildren } from 'react';

export default function Main(props: PropsWithChildren) {
  const { children } = props;

  return (
    <main className='flex size-full items-center overflow-auto justify-between bg-white dark:bg-[#383838]'>
      {children}
    </main>
  );
}
