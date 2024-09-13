import { CLASSES } from '../../../constants';

const PAGE_RANGES = [10, 20, 30, 40, 50];

type SelectPageSizeProps = {
  pageSize: number;
  setPageSize: (value: any) => void;
  pageRanges?: Array<number>;
};

export default function SelectPageSize(props: SelectPageSizeProps) {
  const { pageSize, setPageSize, pageRanges } = props;

  return (
    <select
      className={CLASSES.tableFooterSelect}
      value={pageSize}
      onChange={(e) => setPageSize(Number(e.target.value))}
    >
      {(pageRanges ?? PAGE_RANGES).map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  );
}
