import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface OuterProps {
  children: React.ReactChild[];
}

const element = document.createElement('div');

export const Modal: React.FC<any> = ({ children }) => {
  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      element && document.body.removeChild(element);
    };
  }, []);

  return createPortal(children, element);
};
