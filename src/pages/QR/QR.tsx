import { useState } from 'react';
import styled from 'styled-components/macro';

import { useCamera } from './hooks/useCamera';
import { Modal } from './components/Modal';

const CurrentStatus = styled.div`
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 20px;
`;

const statusColors: Record<string, string> = {
  prompt: '#000',
  denied: 'red',
  granted: 'green',
};

const StatusName = styled.strong<{ type: string }>`
  color: ${props => statusColors?.[props.type]};
  padding: 0 3px;
  display: inline-block;
  background-color: #ddd;
`;

const statusList: Record<string, string> = {
  prompt: 'Не запрашивался',
  denied: 'В доступе отказано',
  granted: 'Доступ предоставлен',
};

export const QR = () => {
  const [isOpen, setOpen] = useState(false);
  const { requestPermission, status } = useCamera();

  const handleScan = () => {
    requestPermission(() => {
      setOpen(true);
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} />

      <CurrentStatus>
        Статус разрешения <StatusName type={status}>{statusList?.[status] || ''}</StatusName>
      </CurrentStatus>

      <button type="button" onClick={handleScan}>
        Сканировать QR
      </button>
    </>
  );
};
