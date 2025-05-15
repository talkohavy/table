import { extractDefaultColumnDefsFromFirstRow } from './extractDefaultColumnDefsFromFirstRow';

export function getDefaultColumnDefs(firstRow: any) {
  const isEmptyData = !firstRow || typeof firstRow !== 'object';

  if (isEmptyData) return [];

  const defaultColumnDefs = extractDefaultColumnDefsFromFirstRow(firstRow);

  return defaultColumnDefs;
}
