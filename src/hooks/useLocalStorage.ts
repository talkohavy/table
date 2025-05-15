import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue?: T): [T, (value: T) => void, () => void] {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);

    if (item) {
      try {
        return JSON.parse(item);
      } catch (_error) {
        return item;
      }
    }

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => localStorage.removeItem(key), [key]);

  return [value, setValue, deleteValue];
}
