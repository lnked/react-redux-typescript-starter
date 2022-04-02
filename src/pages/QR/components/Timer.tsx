import { useEffect, useState, useRef, useCallback } from 'react';

export const Timer = () => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const [time, setTime] = useState(0);

  const resetTimeout = () => {
    timeout.current && clearTimeout(timeout.current);
  };

  const startTimer = useCallback(() => {
    resetTimeout();

    timeout.current = setTimeout(() => {
      setTime(prevTime => prevTime + 1);
      startTimer();
    }, 1000);
  }, []);

  useEffect(() => {
    startTimer();

    return resetTimeout;
  }, [startTimer]);

  return <>({time} сек.)</>;
};
