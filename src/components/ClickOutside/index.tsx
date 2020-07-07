import React, { useEffect } from 'react';

export interface OuterProps {
  onClick: () => void;
  children: React.ReactChild;
}

export interface RefObject<T> {
  readonly current: T | null;
}

function ClickOutside({ onClick, children }: OuterProps) {
  const refs = React.Children.map(children, React.createRef);

  const handleClick = (e: any) => {
    const isOutside = refs.every((ref: RefObject<any>) => !ref.current.contains(e.target));

    isOutside && onClick();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return React.Children.map(children as React.ReactElement, (element: JSX.Element, idx) =>
    React.cloneElement(element, {
      ref: refs[idx],
    })
  );
}

ClickOutside.displayName = 'ClickOutside';

export default ClickOutside;
