import { useEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export interface OuterProps {}

const element = document.createElement('div');

export const Modal = ({ children }: PropsWithChildren<{}>) => {
  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      element && document.body.removeChild(element);
    };
  }, []);

  return createPortal(children, element);
};
