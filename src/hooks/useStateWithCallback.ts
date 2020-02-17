import { useEffect, useState } from 'react';

export const useStateWithCallback = (initilValue: any, callBack: (state: any) => void): any => {
  const [state, setState] = useState<any>(initilValue);
  useEffect(() => callBack(state), [state, callBack]);
  return [state, setState];
};
