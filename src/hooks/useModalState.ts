import { useState } from 'react';

const emptyProps = {};

type Props = {
  initialOpen?: boolean;
};

export const useModalState = ({ initialOpen = false }: Props = emptyProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return { onOpen, onClose, isOpen, onToggle };
};
