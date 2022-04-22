import { QRIcon } from '../assets';
import { CardButton, CardIcon, CardTitle } from '../helpers/tokens';
import { useQRCodeScanner } from '../hooks/useQRCodeScanner';
import { locale } from '../locale';

const categoryButtonDataTestId = ['QRCode', 'category-button'].join('-');

export const CategoryButtonQR = () => {
  const { onClickQRCodeButton } = useQRCodeScanner();

  return (
    <CardButton as="a" onClick={onClickQRCodeButton} data-test-id={categoryButtonDataTestId}>
      <CardIcon src={QRIcon} aria-hidden />
      <CardTitle>{locale.payByQRCode}</CardTitle>
    </CardButton>
  );
};
