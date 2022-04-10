/* eslint-disable smells/no-complex-chaining */
import { useEffect, useState } from 'react';
import { scanImageData } from 'zbar.wasm';

import { requestMediaPermissions } from '../utils';

const camera = 'camera' as PermissionName;

export const useCamera = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    //   navigator.permissions.query({ name: 'camera' }).then(res => {
    //     res.onchange = e => {
    //       // detecting if the event is a change
    //       if (e.type === 'change') {
    //         // checking what the new permissionStatus state is
    //         const newState = e.target.state;
    //         if (newState === 'denied') {
    //           console.log('why did you decide to block us?');
    //         } else if (newState === 'granted') {
    //           console.log('We will be together forever!');
    //         } else {
    //           console.log('Thanks for reverting things back to normal');
    //         }
    //       }
    //     };
    //   });

    navigator.permissions.query({ name: camera }).then(res => {
      setStatus(res.state);

      res.onchange = () => {
        console.log('%c useCamera ', 'color: white; background-color: #8726bf;', res.state);
      };
    });
  }, []);

  const requestPermission = (cb: () => void) => {
    requestMediaPermissions();

    navigator.permissions.query({ name: camera }).then(res => {
      console.log('%c useCamera ', 'color: white; background-color: #bf9626;', { res });

      if (res.state === 'granted') {
        cb();
      }

      res.onchange = (e: any) => {
        // detecting if the event is a change
        if (e.type === 'change') {
          // checking what the new permissionStatus state is
          const newState = e.target.state;
          if (newState === 'denied') {
            console.log('why did you decide to block us?');
          } else if (newState === 'granted') {
            console.log('We will be together forever!');
          } else {
            console.log('Thanks for reverting things back to normal');
          }
        }
      };
    });
  };

  const scanData = async () => {
    // const width = video.videoWidth;
    // const height = video.videoHeight;
    // canvas.width = width;
    // canvas.height = height;
    // const ctx = canvas.getContext('2d');
    // ctx.drawImage(video, 0, 0, width, height);
    // const imgData = ctx.getImageData(0, 0, width, height);
    // const res = await scanImageData(imgData);
    // console.log(res?.[0]?.decode(), Date.now());
    // render(res);
  };

  // const sleep = (ms) =>
  //   new Promise((r) => {
  //     setTimeout(r, ms);
  //   });

  // const main = async () => {
  //   try {
  //     await init();
  //     while (true) {
  //       await scan();
  //       await sleep(SCAN_PROID_MS);
  //     }
  //   } catch (err) {
  //     const div = document.createElement("div");
  //     div.className = "full middle";
  //     div.style =
  //       "height: 72px; width: 100%; text-align: center; font-size: 36px";
  //     div.innerText = "Cannot get cammera: " + err;
  //     document.body.appendChild(div);
  //     console.error(err);
  //   }
  // };

  // main();

  return {
    status,
    scanData,
    requestPermission,
  };
};
