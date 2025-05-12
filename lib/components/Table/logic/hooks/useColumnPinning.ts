import { SetStateAction, useState } from 'react';

type UseColumnPinningProps = {
  initialState?: Record<string, boolean>;
  onColumnsPinningChange?: any;
};

/**
 * Currently not using this!
 * Look down below for the usage example
 */
export function useColumnPinning(props?: UseColumnPinningProps) {
  const { initialState = {}, onColumnsPinningChange } = props ?? {};

  const [columnPinning, setColumnPinning] = useState(initialState);

  const handleColumnPinningChange = (cb: (old: any) => void) => {
    setColumnPinning(cb as SetStateAction<Record<string, boolean>>);
    onColumnsPinningChange?.(cb);
  };

  return {
    columnPinningState: columnPinning,
    columnPinningProps: {
      onColumnPinningChange: handleColumnPinningChange,
    },
  };
}

// Usage Example
// NOTE: Strangely enough, the below code worked when I did NOT use the useColumnPinning hook.
//       and when I DID, it didn't work.
/**
 * {getCanPin() && (
    <div className='flex gap-1 justify-center'>
      {header.column.getIsPinned() !== 'left' ? (
        <button
          className='border rounded px-2'
          onClick={() => {
            header.column.pin('left');
          }}
        >
          {'<='}
        </button>
      ) : null}
      {header.column.getIsPinned() ? (
        <button
          className='border rounded px-2'
          onClick={() => {
            header.column.pin(false);
          }}
        >
          X
        </button>
      ) : null}
      {header.column.getIsPinned() !== 'right' ? (
        <button
          className='border rounded px-2'
          onClick={() => {
            header.column.pin('right');
          }}
        >
          {'=>'}
        </button>
      ) : null}
    </div>
  )}
 */
