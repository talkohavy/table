import { useMemo } from 'react';
import Select from '../../../../../Select';
import { CLASSES } from '../../../constants';

const PAGE_RANGES = [10, 20, 30, 40, 50];

type SelectPageSizeProps = {
  pageSize: number;
  setPageSize: (value: any) => void;
  pageRanges?: Array<number>;
};

export default function SelectPageSize(props: SelectPageSizeProps) {
  const { pageSize, setPageSize, pageRanges = PAGE_RANGES } = props;

  const pageCountOptions = useMemo(() => pageRanges.map((value) => ({ value, label: value.toString() })), [pageRanges]);

  return (
    <Select
      selectedOption={pageCountOptions.find((option) => option.value === pageSize)!}
      setOption={(option) => setPageSize(Number(option.value))}
      options={pageCountOptions}
      className={CLASSES.tableFooterSelect}
    />
  );
}
