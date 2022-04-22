/**
 * Webpack trys to parse .wasm file even if file-loader is used. Using extension
 * *.wasm.bin as a workaround.
 * See https://github.com/webpack/webpack/issues/6725.
 * To facilitate streaming compilation by the browser, *.wasm.bin files
 * should be served as MIME type 'application/wasm'.
 */
// import wasmBinaryFile from './zbar.wasm';
import ZBarInstance from './ZBarInstance';
import { instantiate } from './zbar';
import wasmBinaryFileName from './zbar.wasm.bin';

// locateFile is used to override the file path to the path provided by
// file-loader.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const locateFile = (file: string, _scriptDir: string) => {
  if (file !== 'zbar.wasm') {
    console.error('Unexpected file:', file);
  }

  return wasmBinaryFileName;
};

export const loadWasmInstance = async (importObj: any): Promise<ZBarInstance | null> => {
  importObj.locateFile = locateFile;

  const promise = await instantiate(importObj);

  return promise;
};
