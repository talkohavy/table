import DarkModeToggle from '../../DarkModeToggle/DarkModeToggle.tsx';
import SideBarLinkList from './SideBarLinkList';

export default function Sidebar() {
  return (
    <nav className='relative flex h-full w-52 flex-col items-start justify-between bg-amber-50 px-4 py-6 shrink-0 shadow-md transition-all duration-300 dark:bg-gray-900'>
      <SideBarLinkList />

      <DarkModeToggle size={20} />
    </nav>
  );
}
