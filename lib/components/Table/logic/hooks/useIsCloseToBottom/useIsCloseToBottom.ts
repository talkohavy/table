import { useCallback, useEffect, useRef, useState } from 'react';
import { wrapInDebounce } from '../../utils/wrapInDebounce';
import { wrapInThrottle } from '../../utils/wrapInThrottle';
import { calcGapBetweenWindowFloorAndBottom } from './utils/calcGapBetweenWindowFloorAndBottom';

type UseIsCloseToBottomProps = {
  initialState?: boolean;
  thresholdGap?: number;
  delayMs?: number;
  onBottomReached?: () => void;
};

/**
 * @description
 * You have a container and a window.
 * h1 = represents the height of the container.
 * h2 = represents the height of the window.
 *    __________
 *   |          |          }
 *   |          |          }
 *   |          |          }
 *  _|__________|_         } h1
 * |              |  ] h2  }
 * |______________|  ]     }
 *   |          |          }
 *   |__________|          }
 *
 * upperGap = the distance between the container's ceiling and the window's ceiling.
 * lowerGap = the distance between the container's floor and the window's floor.
 *
 * HOW TO USE:
 *
 * - Step 1: call the hook, and extract the onScroll function
 * - Step 2: attach it to the container element's `onScroll` attribute.
 *
 * When you scroll inside the container, the hook will update the `isVisible` value for you,
 * using a debounce with a delay of 100ms (default value). You can choose to override the
 * default delay, and pass a different value to `delayMs`.
 */
export function useIsCloseToBottom(props: UseIsCloseToBottomProps) {
  const { initialState, thresholdGap = 60, delayMs = 100, onBottomReached } = props ?? {};

  const [isCloseToBottom, setIsCloseToBottom] = useState(initialState);
  const prevScrollTopRef = useRef<number>(0);
  const callbackRef = useRef<(props?: any) => void>(() => {});

  useEffect(() => {
    if (onBottomReached) {
      callbackRef.current = onBottomReached ?? (() => {});
    }
  }, [onBottomReached]);

  const throttledCallback = useCallback(
    // eslint-disable-next-line
    wrapInThrottle(() => {
      callbackRef.current(); // <--- do not pass callbackRef.current by ref
    }, 300),
    [],
  );

  const getIsScrollingDown = useCallback((prevScrollTopRef: any, scrollTop: number) => {
    const prevScrollTop = prevScrollTopRef.current;
    const isScrollingDown = scrollTop > prevScrollTop;
    prevScrollTopRef.current = scrollTop;
    return isScrollingDown;
  }, []);

  const onScroll = useCallback(
    wrapInDebounce((e: any) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target;

      const isScrollingDown = getIsScrollingDown(prevScrollTopRef, scrollTop);

      const actualGap = calcGapBetweenWindowFloorAndBottom({ clientHeight, scrollHeight, scrollTop });

      if (actualGap < thresholdGap && isScrollingDown) {
        if (!isCloseToBottom) setIsCloseToBottom(true);
        throttledCallback();
        return;
      }

      if (actualGap >= thresholdGap && !isScrollingDown) {
        if (isCloseToBottom) setIsCloseToBottom(false);
        return;
      }
    }, delayMs),
    [isCloseToBottom],
  );

  return { isCloseToBottom, onScroll };
}
