import { useRef, useEffect, useState, useCallback, FC } from 'react';

type Props = {
  ticks: number;
  interval?: number;
  onComplete?: () => void;
};

const useAnimationFrame = (callback: (time: number) => void) => {
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]); // Make sure the effect runs only once
};

export const Countdown: FC<Props> = ({ ticks, onComplete, interval = 1000 }) => {
  const [count, setCount] = useState(ticks);

  useAnimationFrame(deltaTime => {
    setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
  });

  return <div>{Math.round(count)}</div>;
};
