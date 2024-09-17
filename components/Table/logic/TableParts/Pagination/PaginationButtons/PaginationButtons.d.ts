type PaginationButtonsProps = {
    firstPage: () => void;
    previousPage: () => void;
    getCanPreviousPage: () => boolean;
    nextPage: () => void;
    lastPage: () => void;
    getCanNextPage: () => boolean;
};
export default function PaginationButtons(props: PaginationButtonsProps): import("react/jsx-runtime").JSX.Element;
export {};
