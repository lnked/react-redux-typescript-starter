import * as React from 'react';

export interface OuterProps {
  children?: React.ReactChild[] | React.ReactChild;
}

function Steps({ children }: OuterProps) {
  return (
    <nav>
      <ol>
        <li><a href="/cart/checkout">ваш заказ</a></li>
        <li><a href="/cart/delivery">адрес доставки</a></li>
        <li>оплата</li>
        <li>подтверждение</li>
      </ol>

      {children}
    </nav>
  );
}

export default Steps;
