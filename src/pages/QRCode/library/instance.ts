import ZBarInstance from './ZBarInstance';
import { loadWasmInstance } from './load';

const instPromise = (async () => {
  const inst = await loadWasmInstance({});

  if (!inst) {
    throw Error('WASM was not loaded');
  }

  return inst;
})();

export const getInstance = async (): Promise<ZBarInstance> => {
  const promise = await instPromise;

  return promise;
};
