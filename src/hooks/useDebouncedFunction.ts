import { useRef, useEffect } from 'react';

export default function useDebouncedFunction(func, delay, cleanUp = false) {
  const timeoutRef = useRef<any>(null);

  // Очистка таймера
  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  // Очищаем таймер при анмаунте компонента, если cleanUp выставлен в true
  // и тем самым отменяем последний запланированный вызов
  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args) => {
    clearTimer();

    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
}

/*
// Отложенная проверка значения
const debouncedValueCheck = useDebouncedFunction(
  newValue => checkIfOptimal(newValue, setIsOptimal),
  300,
  true
);
import useDebouncedFunction from 'hooks/useDebouncedFunction';

const debouncedValueLogging = useDebouncedFunction(newValue => valueLogging(newValue), 300);
const debouncedValueCheck = useDebouncedFunction(newValue => checkIfOptimal(newValue, setIsOptimal), 300);

const handleChange = async (event, newValue) => {
  debouncedValueLogging(newValue);
  debouncedValueCheck(newValue);
};
*/
