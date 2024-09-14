import { useCallback, useEffect } from 'react';
import { GAP_TO_BOTTOM } from '../../constants';

type UseReachToBottomMechanismProps = {
  onBottomReached?: () => void;
  tableParentRef: React.RefObject<HTMLDivElement>;
};

function useReachToBottomMechanism(props: UseReachToBottomMechanismProps) {
  const { onBottomReached, tableParentRef } = props;

  const handleBottomReached = useCallback(
    (containerRefElement: HTMLDivElement) => {
      if (containerRefElement && onBottomReached) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        const isCloseToBottom = scrollHeight - scrollTop - clientHeight < GAP_TO_BOTTOM;

        if (isCloseToBottom) onBottomReached();
      }
    },
    [onBottomReached],
  );

  // A check on mount and after a fetch to see if the table is already scrolled to the bottom. Common use case is to fetch more data.
  useEffect(() => {
    handleBottomReached(tableParentRef.current!);
  }, [handleBottomReached]);

  return { handleBottomReached };
}

export { useReachToBottomMechanism };
