import { MouseEventHandler, ReactNode } from 'react';
type ButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: () => void;
    disabled?: boolean;
    className?: string;
    style?: any;
    testId?: string;
};
export default function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
