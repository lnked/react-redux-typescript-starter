import { useEffect } from 'react';

export function useDataProviderActions(actions) {
  useEffect(() => {
    console.log('actions', { actions });
  }, [actions]);
}
