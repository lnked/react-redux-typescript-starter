import { useEffect, createRef, Children, ReactChild, ReactElement, cloneElement } from 'react';

export interface OuterProps {
  onClick: () => void;
  children: ReactChild;
}

export interface RefObject<T> {
  readonly current: T | null;
}

export function ClickOutside({ onClick, children }: OuterProps) {
  const refs = Children.map(children, createRef);

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

  return Children.map(children as ReactElement, (element: JSX.Element, idx) =>
    cloneElement(element, {
      ref: refs[idx],
    })
  );
}

ClickOutside.displayName = 'ClickOutside';
