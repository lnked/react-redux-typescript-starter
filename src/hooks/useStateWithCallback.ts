import { useEffect, useState } from 'react';

export type Dispatch<A> = (value: A) => void;

export type SetStateAction<S> = S | ((prevState: S) => S);

export type InitialStateType<S> = S | (() => S);

export type CallBackType<S> = (state: S) => void;

export const useStateWithCallback = <S>(
  initialState: InitialStateType<S>,
  callBack: CallBackType<S>,
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    callBack(state);
  }, [state, callBack]);

  return [state, setState];
};
