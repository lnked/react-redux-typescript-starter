import { useState } from 'react';

export const useQRCodeScanner = () => {
  const [isModalOpen, setModalOpenState] = useState(true);
  const [result, setResult] = useState('');

  const onQRCodeScan = (data: string) => {
    setResult(data);
  };

  const onClickQRCodeButton = async () => {
    setModalOpenState(true);
  };

  const onCloseQRCodeScanner = async () => {
    setModalOpenState(false);
  };

  const onFlashClick = () => {
    /* */
  };

  const onImageClick = () => {
    /* */
  };

  const onCameraClick = () => {
    /* */
  };

  return {
    result,
    isModalOpen,
    onQRCodeScan,
    onFlashClick,
    onImageClick,
    onCameraClick,
    onClickQRCodeButton,
    onCloseQRCodeScanner,
  };
};
