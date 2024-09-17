/// <reference types="react" />
type UseReachToBottomMechanismProps = {
    onBottomReached?: () => void;
    tableParentRef: React.RefObject<HTMLDivElement>;
};
declare function useReachToBottomMechanism(props: UseReachToBottomMechanismProps): {
    handleBottomReached: (containerRefElement: HTMLDivElement) => void;
};
export { useReachToBottomMechanism };
