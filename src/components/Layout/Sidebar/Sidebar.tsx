import SideBarLinkList from './SideBarLinkList';

export default function Sidebar() {
  return (
    <nav className='relative flex h-full w-52 flex-col items-start justify-start bg-amber-50 p-4 shrink-0 shadow-md transition-all duration-300 dark:bg-gray-900'>
      <SideBarLinkList />
    </nav>
  );
}
