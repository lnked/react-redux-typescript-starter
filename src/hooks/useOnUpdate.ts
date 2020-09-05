import { useEffect, useRef } from 'react';

type onUpdateType<T> = (prev: T) => typeof prev;

export function useOnUpdate<T>(onUpdate: onUpdateType<T>, value: T) {
  // Flag that inditcates whether we are in a mount or update phase
  const isMounted = useRef<boolean>(false);

  // Create a ref object to store the value
  const valueRef = useRef<T | void>(undefined);

  useEffect(() => {
    const prevValue = valueRef.current;

    // If we are in an update effect invoke the callback with the prev value
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      onUpdate(prevValue as any);
    }

    // Update the ref object each time the value is updated
    valueRef.current = value;
  }, [value, onUpdate]); // Run only when the value updates
}
