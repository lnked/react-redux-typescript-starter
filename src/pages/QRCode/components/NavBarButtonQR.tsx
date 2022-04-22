import { QRIcon } from '../assets';
import { QRButton, ICON_SIZE } from '../helpers/tokens';
import { useQRCodeScanner } from '../hooks/useQRCodeScanner';

const navbarButtonQRDataTestId = ['navbar', 'qrcode-scanner'].join('-');

export const NavBarButtonQR = ({ className }: { className?: string }) => {
  const { onClickQRCodeButton } = useQRCodeScanner();

  return (
    <QRButton type="button" onClick={onClickQRCodeButton} data-test-id={navbarButtonQRDataTestId} className={className}>
      <img src={QRIcon} width={ICON_SIZE.xs} aria-hidden />
    </QRButton>
  );
};
