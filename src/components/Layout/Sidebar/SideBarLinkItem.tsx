import { Link } from 'react-router-dom';
import clsx from 'clsx';

type SideBarLinkItemProps = {
  to: string;
  text: string;
  isActive?: boolean;
};

export default function SideBarLinkItem(props: SideBarLinkItemProps) {
  const { to, text, isActive } = props;

  return (
    <Link to={to} className={clsx('hover:text-red-500 active:text-red-400', isActive && 'text-red-400')}>
      {text}
    </Link>
  );
}
