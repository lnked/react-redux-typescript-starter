import { useEffect, useState } from 'react';

export type Dispatch<A> = (value: A) => void;

export type SetStateAction<S> = S | ((prevState: S) => S);

export const useStateWithCallback = <S>(
  initialState: S | (() => S),
  callBack: (state: S) => void,
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    callBack(state);
  }, [state, callBack]);

  return [state, setState];
};
