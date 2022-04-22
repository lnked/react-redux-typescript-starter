/* eslint-disable */
export const instantiate = (function () {
  let _scriptDir =
    typeof document !== 'undefined' && document.currentScript ? (document.currentScript as any).src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;

  return (instantiate: any = {}) => {
    const Module = typeof instantiate !== 'undefined' ? instantiate : {};

    let readyPromiseReject: ((arg0: WebAssembly.RuntimeError) => void) | null | undefined;
    let readyPromiseResolve: (value: unknown) => void;

    Module.ready = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });

    let moduleOverrides: any = {};
    let key: any;

    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }

    let arguments_: string[] = [];
    let thisProgram = './this.program';
    let quit_ = function (status: any, toThrow: any) {
      throw toThrow;
    };

    const ENVIRONMENT_IS_WEB = typeof window === 'object';
    const ENVIRONMENT_IS_NODE = false;
    const ENVIRONMENT_IS_WORKER = false;
    // const ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';

    let scriptDirectory = '';

    function locateFile(path: string) {
      if (Module.locateFile) {
        return Module.locateFile(path, scriptDirectory);
      }

      return scriptDirectory + path;
    }
    let read_: (arg0: any, arg1: boolean) => any;
    let readAsync: (arg0: string, arg1: (response: any) => void, arg2: (reason?: any) => void) => void;
    let readBinary: (filename: any) => any;
    let setWindowTitle;
    function logExceptionOnExit(e: any) {
      if (e instanceof ExitStatus) return;
      const toLog = e;
      err(`exiting due to exception: ${toLog}`);
    }
    let nodeFS: {
      readFileSync: (arg0: any, arg1: string | null) => any;
      readFile: (arg0: any, arg1: (err: any, data: any) => void) => void;
    };

    let nodePath: string;

    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = `${require('path').dirname(scriptDirectory)}/`;
      } else {
        scriptDirectory = `${__dirname}/`;
      }

      read_ = function shell_read(filename: any, binary: any) {
        if (!nodeFS) nodeFS = require('fs');
        if (!nodePath) nodePath = require('path');
        filename = nodePath.normalize(filename);

        return nodeFS.readFileSync(filename, binary ? null : 'utf8');
      };

      readBinary = function readBinary(filename: any) {
        let ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }

        assert(ret.buffer, undefined);

        return ret;
      };

      readAsync = function readAsync(filename: any, onload: (arg0: any) => void, onerror: (arg0: any) => void) {
        if (!nodeFS) nodeFS = require('fs');
        if (!nodePath) nodePath = require('path');
        filename = nodePath.normalize(filename);
        nodeFS.readFile(filename, function (err: any, data: { buffer: any }) {
          if (err) onerror(err);
          else onload(data.buffer);
        });
      };

      if (process.argv.length > 1) {
        thisProgram = process.argv[1].replace(/\\/g, '/');
      }

      arguments_ = process.argv.slice(2);
      process.on('uncaughtException', function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });

      process.on('unhandledRejection', function (reason) {
        throw reason;
      });

      quit_ = function (status, toThrow) {
        if (keepRuntimeAlive()) {
          process.exitCode = status;
          throw toThrow;
        }
        logExceptionOnExit(toThrow);
        process.exit(status);
      };

      Module.inspect = function () {
        return '[Emscripten Module object]';
      };
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== 'undefined' && document.currentScript) {
        scriptDirectory = (document.currentScript as any).src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf('blob:') !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/') + 1);
      } else {
        scriptDirectory = '';
      }
      {
        read_ = function (url: string) {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          xhr.send(null);
          return xhr.responseText;
        };

        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function (url: string) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.responseType = 'arraybuffer';
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function (
          url: string,
          onload: (arg0: any) => void,
          onerror: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null,
        ) {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = function () {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              onload(xhr.response);
              return;
            }

            // onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = function (title: string) {
        document.title = title;
      };
    } else {
    }
    const out = Module.print || console.log.bind(console);
    var err = Module.printErr || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module.arguments) arguments_ = Module.arguments;
    if (Module.thisProgram) thisProgram = Module.thisProgram;
    if (Module.quit) quit_ = Module.quit;
    let wasmBinary: Iterable<number>;
    if (Module.wasmBinary) wasmBinary = Module.wasmBinary;
    const noExitRuntime = Module.noExitRuntime || true;
    if (typeof WebAssembly !== 'object') {
      abort('no native wasm support detected');
    }
    let wasmMemory: { buffer: any; grow: (arg0: number) => void };
    let ABORT = false;
    let EXITSTATUS;

    function assert(condition: any, text: any) {
      if (!condition && text) {
        abort(`Assertion failed: ${text}`);
      }
    }

    const UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
    function UTF8ArrayToString(heap: any, idx: number, maxBytesToRead: any = undefined) {
      const endIdx = idx + maxBytesToRead;

      let endPtr = idx;

      while (heap?.[endPtr] && !(endPtr >= endIdx)) ++endPtr;

      if (endPtr - idx > 16 && heap?.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      }

      let str = '';
      while (idx < endPtr) {
        let u0 = heap[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        const u1 = heap[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode(((u0 & 31) << 6) | u1);
          continue;
        }
        const u2 = heap[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          const ch = u0 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        }
      }

      return str;
    }
    function UTF8ToString(ptr: any, maxBytesToRead: any = undefined) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    }
    function alignUp(x: number, multiple: number) {
      if (x % multiple > 0) {
        x += multiple - (x % multiple);
      }

      return x;
    }
    let buffer: any;
    let HEAP8;
    let HEAPU8: any[] | Uint8Array;
    let HEAP16;
    let HEAPU16;
    let HEAP32: Int32Array | number[];
    let HEAPU32;
    let HEAPF32;
    let HEAPF64;
    function updateGlobalBufferAndViews(buf: Iterable<number>) {
      buffer = buf;
      Module.HEAP8 = HEAP8 = new Int8Array(buf);
      Module.HEAP16 = HEAP16 = new Int16Array(buf);
      Module.HEAP32 = HEAP32 = new Int32Array(buf);
      Module.HEAPU8 = HEAPU8 = new Uint8Array(buf);
      Module.HEAPU16 = HEAPU16 = new Uint16Array(buf);
      Module.HEAPU32 = HEAPU32 = new Uint32Array(buf);
      Module.HEAPF32 = HEAPF32 = new Float32Array(buf);
      Module.HEAPF64 = HEAPF64 = new Float64Array(buf);
    }
    const INITIAL_MEMORY = Module.INITIAL_MEMORY || 16777216;
    let wasmTable: { get: (arg0: any) => any };
    const __ATPRERUN__: any[] = [];
    const __ATINIT__: any[] = [];
    const __ATPOSTRUN__: any[] = [];
    let runtimeInitialized = false;
    const runtimeKeepaliveCounter = 0;
    function keepRuntimeAlive() {
      return noExitRuntime || runtimeKeepaliveCounter > 0;
    }
    function preRun() {
      if (Module.preRun) {
        if (typeof Module.preRun === 'function') Module.preRun = [Module.preRun];
        while (Module.preRun.length) {
          addOnPreRun(Module.preRun.shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      if (Module.postRun) {
        if (typeof Module.postRun === 'function') Module.postRun = [Module.postRun];
        while (Module.postRun.length) {
          addOnPostRun(Module.postRun.shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb: any) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb: any) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb: any) {
      __ATPOSTRUN__.unshift(cb);
    }

    let runDependencies = 0;
    let runDependencyWatcher: number | null = null;
    let dependenciesFulfilled: { (): void; (): void } | null = null;

    function addRunDependency(id: string) {
      runDependencies++;
      if (Module.monitorRunDependencies) {
        Module.monitorRunDependencies(runDependencies);
      }
    }

    function removeRunDependency(id: string) {
      runDependencies--;
      if (Module.monitorRunDependencies) {
        Module.monitorRunDependencies(runDependencies);
      }

      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          const callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module.preloadedImages = {};
    Module.preloadedAudios = {};

    function abort(what: string | undefined) {
      if (Module.onAbort) {
        Module.onAbort(what);
      }

      what = `Aborted(${what})`;
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += '. Build with -s ASSERTIONS=1 for more info.';

      // @ts-ignore
      const e = new WebAssembly.RuntimeError(what);

      readyPromiseReject && readyPromiseReject(e);

      throw e;
    }

    const dataURIPrefix = 'data:application/octet-stream;base64,';

    function isDataURI(filename: string) {
      return filename.startsWith(dataURIPrefix);
    }

    function isFileURI(filename: string) {
      return filename.startsWith('file://');
    }

    let wasmBinaryFile = 'zbar.wasm';

    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }

    function getBinary(file: string) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        }
        throw 'both async and sync fetching of the wasm failed';
      } catch (err) {
        // @ts-ignore
        abort(err);
      }
    }

    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === 'function' && !isFileURI(wasmBinaryFile)) {
          return fetch(wasmBinaryFile, { credentials: 'same-origin' })
            .then(function (response) {
              if (!response.ok) {
                throw `failed to load wasm binary file at '${wasmBinaryFile}'`;
              }

              return response.arrayBuffer();
            })
            .catch(function () {
              return getBinary(wasmBinaryFile);
            });
        }
        if (readAsync) {
          return new Promise(function (resolve, reject) {
            readAsync(
              wasmBinaryFile,
              function (response: Iterable<number>) {
                resolve(new Uint8Array(response));
              },
              reject,
            );
          });
        }
      }

      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      const info = { a: asmLibraryArg };

      function receiveInstance(instance: any) {
        const { exports } = instance;
        Module.asm = exports;
        wasmMemory = Module.asm.g;
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module.asm.s;
        addOnInit(Module.asm.h);
        removeRunDependency('wasm-instantiate');
      }

      addRunDependency('wasm-instantiate');

      function receiveInstantiationResult(result: { instance: any }) {
        receiveInstance(result.instance);
      }

      function instantiateArrayBuffer(receiver: any) {
        return getBinaryPromise()
          .then(function (binary) {
            return WebAssembly.instantiate(binary as any, info);
          })
          .then(function (instance) {
            return instance;
          })
          .then(receiver, function (reason) {
            err(`failed to asynchronously prepare wasm: ${reason}`);
            abort(reason);
          });
      }
      function instantiateAsync() {
        if (
          !wasmBinary &&
          typeof WebAssembly.instantiateStreaming === 'function' &&
          !isDataURI(wasmBinaryFile) &&
          !isFileURI(wasmBinaryFile) &&
          typeof fetch === 'function'
        ) {
          return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
            const result = WebAssembly.instantiateStreaming(response, info);

            return result.then(receiveInstantiationResult, function (reason) {
              err(`wasm streaming compile failed: ${reason}`);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
          });
        }

        return instantiateArrayBuffer(receiveInstantiationResult);
      }
      if (Module.instantiateWasm) {
        try {
          const exports = Module.instantiateWasm(info, receiveInstance);

          return exports;
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function callRuntimeCallbacks(callbacks: any[]) {
      while (callbacks.length > 0) {
        const callback = callbacks.shift();
        if (typeof callback === 'function') {
          callback(Module);
          continue;
        }
        const { func } = callback;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            getWasmTableEntry(func)();
          } else {
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }
    function getWasmTableEntry(funcPtr: number) {
      return wasmTable.get(funcPtr);
    }
    let _emscripten_get_now: () => any;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function () {
        const t = process.hrtime();

        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else {
      _emscripten_get_now = function () {
        return performance.now();
      };
    }
    const _emscripten_get_now_is_monotonic = true;
    function setErrNo(value: number) {
      HEAP32[___errno_location() >> 2] = value;
      return value;
    }
    function _clock_gettime(clk_id: number, tp: number) {
      let now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[tp >> 2] = (now / 1e3) | 0;
      HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
      return 0;
    }

    function _emscripten_memcpy_big(dest: any, src: any, num: any) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    // @ts-ignore
    function emscripten_realloc_buffer(size: number) {
      try {
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {}
    }

    function _emscripten_resize_heap(requestedSize: number) {
      const oldSize: number = HEAPU8.length;
      requestedSize >>>= 0;
      const maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
        let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        const replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }

      return false;
    }

    const SYSCALLS = {
      mappings: {},

      buffers: [null, [], []],

      printChar(stream: number, curr: number) {
        const buffer: any = SYSCALLS.buffers[stream];

        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },

      // varargs: undefined,
      varargs: 0,

      get() {
        SYSCALLS.varargs += 4;
        const ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];

        return ret;
      },

      getStr(ptr: any) {
        const ret = UTF8ToString(ptr);

        return ret;
      },

      get64(low: any, high: any) {
        return low;
      },
    };

    function _fd_close(fd: any) {
      return 0;
    }

    function _fd_seek(fd: any, offset_low: any, offset_high: any, whence: any, newOffset: any) {}

    function _fd_write(fd: any, iov: number, iovcnt: number, pnum: number) {
      let num = 0;

      for (let i = 0; i < iovcnt; i++) {
        const ptr = HEAP32[iov >> 2];
        const len = HEAP32[(iov + 4) >> 2];
        iov += 8;
        for (let j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }

      HEAP32[pnum >> 2] = num;

      return 0;
    }

    const asmLibraryArg = {
      f: _clock_gettime,
      c: _emscripten_memcpy_big,
      d: _emscripten_resize_heap,
      e: _fd_close,
      b: _fd_seek,
      a: _fd_write,
    };

    const asm = createWasm();

    let ___wasm_call_ctors = (Module.___wasm_call_ctors = function () {
      return (___wasm_call_ctors = Module.___wasm_call_ctors = Module.asm.h).apply(null, arguments);
    });
    let _ImageScanner_create = (Module._ImageScanner_create = function () {
      return (_ImageScanner_create = Module._ImageScanner_create = Module.asm.i).apply(null, arguments);
    });
    let _ImageScanner_destory = (Module._ImageScanner_destory = function () {
      return (_ImageScanner_destory = Module._ImageScanner_destory = Module.asm.j).apply(null, arguments);
    });
    let _ImageScanner_set_config = (Module._ImageScanner_set_config = function () {
      return (_ImageScanner_set_config = Module._ImageScanner_set_config = Module.asm.k).apply(null, arguments);
    });
    let _ImageScanner_enable_cache = (Module._ImageScanner_enable_cache = function () {
      return (_ImageScanner_enable_cache = Module._ImageScanner_enable_cache = Module.asm.l).apply(null, arguments);
    });
    let _ImageScanner_recycle_image = (Module._ImageScanner_recycle_image = function () {
      return (_ImageScanner_recycle_image = Module._ImageScanner_recycle_image = Module.asm.m).apply(null, arguments);
    });
    let _ImageScanner_get_results = (Module._ImageScanner_get_results = function () {
      return (_ImageScanner_get_results = Module._ImageScanner_get_results = Module.asm.n).apply(null, arguments);
    });
    let _ImageScanner_scan = (Module._ImageScanner_scan = function () {
      return (_ImageScanner_scan = Module._ImageScanner_scan = Module.asm.o).apply(null, arguments);
    });
    let _Image_create = (Module._Image_create = function () {
      return (_Image_create = Module._Image_create = Module.asm.p).apply(null, arguments);
    });
    let _Image_destory = (Module._Image_destory = function () {
      return (_Image_destory = Module._Image_destory = Module.asm.q).apply(null, arguments);
    });
    let _Image_get_symbols = (Module._Image_get_symbols = function () {
      return (_Image_get_symbols = Module._Image_get_symbols = Module.asm.r).apply(null, arguments);
    });
    let ___errno_location = (Module.___errno_location = function () {
      return (___errno_location = Module.___errno_location = Module.asm.t).apply(null, arguments);
    });
    let _free = (Module._free = function () {
      return (_free = Module._free = Module.asm.u).apply(null, arguments);
    });

    let _malloc = (Module._malloc = function () {
      return (_malloc = Module._malloc = Module.asm.v).apply(null, arguments);
    });
    let calledRun: boolean;

    function ExitStatus(status: any) {
      // @ts-ignore
      const _that: any = this;

      _that.name = 'ExitStatus';
      _that.message = `Program terminated with exit(${status})`;
      _that.status = status;
    }

    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };

    function run(args: any = undefined) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module.calledRun = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module.onRuntimeInitialized) Module.onRuntimeInitialized();
        postRun();
      }
      if (Module.setStatus) {
        Module.setStatus('Running...');
        setTimeout(function () {
          setTimeout(function () {
            Module.setStatus('');
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }

    Module.run = run;

    if (Module.preInit) {
      if (typeof Module.preInit === 'function') Module.preInit = [Module.preInit];
      while (Module.preInit.length > 0) {
        Module.preInit.pop()();
      }
    }

    run();

    return instantiate.ready;
  };
})();
