import React, { useRef, useEffect } from 'react';

import { CameraIcon, CloseIcon, ImageIcon, FlashIcon } from '../assets';
import {
  ModalWindow,
  ModalCloseButton,
  ModalTitle,
  ModalCamera,
  ModalCanvas,
  ModalControlsButton,
  ModalControls,
  ModalFrameUpper,
  ModalFrameBottom,
} from '../helpers/tokens';
// import { useCamera } from '../hooks/useCamera';
import { useQRCodeScanner } from '../hooks/useQRCodeScanner';
import { locale } from '../locale';

const modalCloseButtonDataTestId = ['QRCode', 'close-button'].join('-');
const modalImageButtonDataTestId = ['QRCode', 'image-button'].join('-');
const modalFlashButtonDataTestId = ['QRCode', 'flash-button'].join('-');
const modalCameraButtonDataTestId = ['QRCode', 'camera-button'].join('-');

export const QRCodeScanner = () => {
  const launched = useRef(false);
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const canvasElement = useRef<HTMLCanvasElement | null>(null);

  // const { launchCamera, terminateCamera } = useCamera({
  //   video: videoElement?.current,
  //   canvas: canvasElement?.current,
  // });

  const { isModalOpen, onCameraClick, onFlashClick, onImageClick, onCloseQRCodeScanner } = useQRCodeScanner();

  // useEffect(() => {
  //   if (isModalOpen && !launched.current) {
  //     launchCamera();
  //     launched.current = true;
  //   }

  //   if (!isModalOpen && launched.current) {
  //     terminateCamera();
  //     launched.current = false;
  //   }
  // }, [isModalOpen, terminateCamera, launchCamera]);

  return (
    <ModalWindow $opened={isModalOpen}>
      <ModalCamera ref={videoElement}>
        <track kind="captions" />
      </ModalCamera>

      <ModalCanvas ref={canvasElement} hidden aria-hidden />

      <ModalCloseButton type="button" onClick={onCloseQRCodeScanner} data-test-id={modalCloseButtonDataTestId}>
        <img src={CloseIcon} />
      </ModalCloseButton>

      <ModalTitle>{locale.titles.base}</ModalTitle>

      <ModalFrameUpper />
      <ModalFrameBottom />

      <ModalControls justifyContent="center">
        <ModalControlsButton onClick={onImageClick} data-test-id={modalImageButtonDataTestId}>
          <img src={ImageIcon} />
        </ModalControlsButton>

        <ModalControlsButton onClick={onFlashClick} data-test-id={modalFlashButtonDataTestId}>
          <img src={FlashIcon} />
        </ModalControlsButton>

        <ModalControlsButton onClick={onCameraClick} data-test-id={modalCameraButtonDataTestId}>
          <img src={CameraIcon} />
        </ModalControlsButton>
      </ModalControls>
    </ModalWindow>
  );
};
