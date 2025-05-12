import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { routes as routesRaw } from '@src/routes';
import SideBarLinkItem from './SideBarLinkItem';

export default function SideBarLinkList() {
  const { pathname } = useLocation();

  const routes = useMemo(
    () =>
      routesRaw.map(({ to, text, activeNames }, index) => ({
        to,
        text: `${index + 1}. ${text}`,
        isActive: activeNames.some((name) => name === pathname),
      })),
    [pathname],
  );

  return (
    <div className='flex animate-appear flex-col items-start justify-start text-xs font-thin gap-2'>
      {routes.map(({ to, text, isActive }) => (
        <SideBarLinkItem key={text} to={to} text={text} isActive={isActive} />
      ))}
    </div>
  );
}
