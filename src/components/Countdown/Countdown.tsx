import { useRef, useEffect, useState, useCallback } from 'react';

type Props = {
  ticks: number;
  interval?: number;
  onComplete?: () => void;
};

const useAnimationFrame = (callback: (time: number) => void, initialValue = 0, interval = 1000) => {
  const requestRef = useRef(0);
  const currentValueRef = useRef(initialValue);
  const previousTimeRef = useRef(new Date().getTime());

  const timer = useCallback(() => {
    const currentTime = new Date().getTime();

    if (currentTime - previousTimeRef.current >= interval) {
      currentValueRef.current -= 1;
      previousTimeRef.current = currentTime;

      callback(currentValueRef.current);
    }

    if (currentValueRef.current > 0) {
      requestRef.current = requestAnimationFrame(timer);
    }
  }, [callback, interval]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(timer);

    return () => cancelAnimationFrame(requestRef.current);
  }, [timer]);
};

export const Countdown = ({ ticks, onComplete, interval = 1000 }: Props) => {
  const [count, setCount] = useState(ticks);

  useAnimationFrame(setCount, ticks, interval);

  useEffect(() => {
    if (count === 0 && onComplete) {
      onComplete();
    }
  }, [count, onComplete]);

  return <div>{count}</div>;
};
