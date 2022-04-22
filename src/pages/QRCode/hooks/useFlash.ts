/* eslint-disable complexity */
import { useCallback, useEffect, useState } from 'react';

type FlashProps = {
  video: HTMLVideoElement | null;
};

export const useFlash = ({ video }: FlashProps) => {
  const [isFlashOn, setFlashOn] = useState(false);

  useEffect(() => {
    return () => {
      setFlashOn(false);
    };
  }, []);

  const hasFlash = useCallback(async (): Promise<boolean> => {
    let stream: MediaStream | undefined;

    if (video?.srcObject && video.srcObject instanceof MediaStream) {
      stream = video.srcObject;

      return 'torch' in stream.getVideoTracks()[0].getSettings();
    }

    return false;
  }, [video]);

  const turnFlashOn = useCallback(async (): Promise<void> => {
    if (isFlashOn) {
      return;
    }

    setFlashOn(true);

    try {
      if (!(await hasFlash())) {
        throw 'No flash available';
      }

      // Note that the video track is guaranteed to exist and to be a MediaStream due to the check in hasFlash
      await (video?.srcObject as MediaStream).getVideoTracks()[0].applyConstraints({
        // @ts-ignore: constraint 'torch' is unknown to ts
        advanced: [{ torch: true }],
      });
    } catch (e) {
      setFlashOn(false);
      throw e;
    }
  }, [video, isFlashOn, hasFlash]);

  const turnFlashOff = useCallback(async (): Promise<void> => {
    if (!isFlashOn) {
      return;
    }

    // applyConstraints with torch: false does not work to turn the flashlight off, as a stream's torch stays
    // continuously on, see https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#torch. Therefore,
    // we have to stop the stream to turn the flashlight off.
    setFlashOn(false);
  }, [isFlashOn]);

  const toggleFlash = useCallback(async (): Promise<void> => {
    if (isFlashOn) {
      await turnFlashOff();
    } else {
      await turnFlashOn();
    }
  }, [isFlashOn, turnFlashOn, turnFlashOff]);

  return {
    hasFlash,
    isFlashOn,
    toggleFlash,
    turnFlashOff,
  };
};
