/* eslint-disable smells/no-complex-chaining */
import { useEffect, useState } from 'react';

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

  return {
    status,
    requestPermission,
  };
};
