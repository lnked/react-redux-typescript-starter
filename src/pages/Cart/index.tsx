import * as React from 'react';

export interface OuterProps {
  children?: React.ReactChild[];
  initialCount: number;
}

export const Cart: React.FC<OuterProps> = (props: OuterProps) => {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  );
};

export default Cart;
