import { ColumnDefTemplate, flexRender, HeaderContext } from '@tanstack/react-table';
import { CLASSES } from '../../logic/constants';
import styles from './HeaderTitle.module.scss';

type HeaderTitleProps = {
  columnDefHeader?: ColumnDefTemplate<HeaderContext<any, unknown>>;
  getContext: () => HeaderContext<any, unknown>;
};

export default function HeaderTitle(props: HeaderTitleProps) {
  const { columnDefHeader, getContext } = props;

  return (
    <div className={(CLASSES.tableHeaderValue, styles.tableHeaderValue)}>
      {flexRender(columnDefHeader, getContext())}
    </div>
  );
}
