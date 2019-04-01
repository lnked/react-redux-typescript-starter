import * as React from 'react'

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

export function Steps ({ children }: P) {
  return (
    <nav>
      <ol>
        <li className="steps__item is-passed"><a href="/cart/checkout">ваш заказ</a></li>
        <li className="steps__item is-passed"><a href="/cart/delivery">адрес доставки</a></li>
        <li className="steps__item">оплата</li>
        <li className="steps__item">подтверждение</li>
      </ol>
    </nav>
  )
}

export default Steps
