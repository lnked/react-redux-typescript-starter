/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { useCallback } from 'react';

import { READER_DELAY } from '../constants';
import { sleep, resizeCamera } from '../helpers/utils';
import { scanImageData } from '../library';

type CameraReceivedProps = {
  video: HTMLVideoElement | null;
  canvas: HTMLCanvasElement | null;
};

export const useCamera = ({ video, canvas }: CameraReceivedProps) => {
  const terminateCamera = useCallback(async () => {
    if (video?.srcObject) {
      const stream = video.srcObject;
      const tracks = (stream as MediaStream)?.getTracks();

      tracks?.forEach(track => {
        if (track.readyState === 'live' && track.kind === 'video') {
          track.stop();
        }
      });

      video.srcObject = null;
    }
  }, [video]);

  const initCamera = useCallback(async () => {
    const handleResize = resizeCamera(video, canvas);

    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'environment',
        aspectRatio: window.innerWidth / window.innerHeight,
      },
    });

    if (video) {
      video.srcObject = mediaStream;
      video.setAttribute('playsinline', '');
      video.setAttribute('autoplay', 'autoplay');
      video.setAttribute('onloadeddata', 'this.play()');

      await new Promise(r => {
        video.onloadedmetadata = r;
        video.play();
      });

      handleResize();

      window.onresize = handleResize;
    }
  }, [video, canvas]);

  // eslint-disable-next-line complexity
  const scanFrame = useCallback(async () => {
    if (!video || !canvas) {
      return null;
    }

    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    ctx?.drawImage(video, 0, 0, width, height);

    const imgData = width && height && ctx?.getImageData(0, 0, width, height);

    if (imgData) {
      const response = await scanImageData(imgData);
      const [code] = response || [];
      const decodedCode = code?.decode();

      if (decodedCode) {
        console.log('%cuseCamera.ts line:85 {(decodedCode}', 'color: white; background-color: #26bfa5;', {
          decodedCode,
        });

        terminateCamera();
      }
    }

    return null;
  }, [video, canvas, terminateCamera]);

  const initScanner = useCallback(async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await scanFrame();
      await sleep(READER_DELAY);
    }
  }, [scanFrame]);

  const launchCamera = useCallback(async () => {
    try {
      await initCamera();
      await initScanner();
    } catch (e) {}
  }, [initCamera, initScanner]);

  return {
    launchCamera,
    terminateCamera,
  };
};
