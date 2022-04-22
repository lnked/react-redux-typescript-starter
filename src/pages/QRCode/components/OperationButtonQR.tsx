import React from 'react';

import { QRIcon } from '../assets';
import { CardButton, CardIconOperations, CardTitle } from '../helpers/tokens';
import { useQRCodeScanner } from '../hooks/useQRCodeScanner';
import { locale } from '../locale';

const operationButtonDataTestId = ['QRCode', 'operationButton'].join('-');

export const OperationButtonQR = () => {
  const { onClickQRCodeButton } = useQRCodeScanner();

  return (
    <CardButton as="a" onClick={onClickQRCodeButton} data-test-id={operationButtonDataTestId}>
      <CardIconOperations src={QRIcon} aria-hidden />
      <CardTitle>{locale.payByQRCode}</CardTitle>
    </CardButton>
  );
};
