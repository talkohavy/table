/// <reference types="react" />
type ColumnResizerProps = {
    onMouseDown: React.MouseEventHandler<HTMLDivElement>;
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    onDoubleClick: React.MouseEventHandler<HTMLDivElement>;
    isResizing: boolean;
};
export default function ColumnResizer(props: ColumnResizerProps): import("react/jsx-runtime").JSX.Element;
export {};
