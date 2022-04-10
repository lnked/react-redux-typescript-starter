import { useEffect, useState, useRef, useCallback } from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from 'styled-components/macro';

import { CameraIcon, CloseIcon, ImageIcon, FlashIcon } from '../assets';
import { locale } from '../locale';
import { QrReader } from './QrReader';
import { Timer } from './Timer';

const ModalWindow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 300;
  width: 100%;
  height: 100vh;
  min-height: 100%;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 49, 59, 0.6);
  clip-path: polygon(0% 0%, 0% 100%, 15% 100%, 15% 30%, 85% 30%, 85% 75%, 15% 75%, 15% 100%, 100% 100%, 100% 0%);
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 22;
  top: 135px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

const Controls = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
  z-index: 22;
`;

const Icon = styled.button<{ logo: string }>`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  background-color: #0d69f2;
  background-image: url(${props => props.logo});
  background-repeat: no-repeat;
  background-size: auto 20px;
  background-position: 50% 50%;

  &:not(:first-child) {
    margin-left: 16px;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  z-index: 300;
  border: 0;
  cursor: pointer;
  background-image: url(${CloseIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 14px 14px;
`;

const Camera = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid lime;
`;

const readerDelay = 100;

const previewStyle = {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  border: '1px solid lime',
};

export const Modal = ({ isOpen, onClose, onTimeout }: any) => {
  const [data, setData] = useState();

  const handleScan = (data: any) => {
    console.log('handleScan', { isOpen });
    setData(data);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWindow>
      <CloseButton type="button" onClick={onClose} />

      <Title>
        {locale.titles.base} <Timer onTik={onTimeout} />
      </Title>

      {/* {JSON.stringify({ data })} */}

      {/* <Camera id="qrCamera" /> */}

      <QrReader
        constraints={{ aspectRatio: window.innerWidth / window.innerHeight, facingMode: 'environment' }}
        containerStyle={{ width: '100%', height: '100%' }}
        videoContainerStyle={{ width: '100%', height: '100%' }}
        videoStyle={{ width: '100%', height: '100%' }}
        scanDelay={readerDelay}
        onResult={handleScan}
        isActive={isOpen}
        // videoId="qrCamera"
        // ViewFinder={}
      />

      <Controls justifyContent="center">
        <Icon logo={ImageIcon} />
        <Icon logo={FlashIcon} />
        <Icon logo={CameraIcon} />
      </Controls>

      <Background />
    </ModalWindow>
  );
};
