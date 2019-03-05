import * as React from 'react'

import Photo from './components/photo'
import Counter from './components/counter'

export interface P {
  id: number;
  link: string;
}

export function Product ({ id, link }: P) {
  return (
    <div className='checkout__block checkout__block_product clearfix' id={`table-product-${id}`}>
      <Photo
        src='http://www.to2ko.ru/upload_dir/f251e28a_4820_sm_crop.jpg'
      />

      <div className='checkout__block__push clearfix'>
        <div className='inner'>
          <div className='checkout__block__row clearfix'>
            <div className='checkout__block__item__content _pl-small _no_bottom'>
              <a href={link} className='checkout__block__item__name js-product-popup' data-product='138'>
                Филадельфия креветка
              </a>

              <span className='checkout__block__item__added'>3 марта 2019, 21:58</span>
            </div>
          </div>

          <div className='checkout__block__row clearfix'>
            <div className='checkout__block__item _table _item-goods'>
              <div className='checkout__block__item__content _pl-small _no_pr'>
                <span className='checkout__block__item__price'>
                  <strong className='checkout__block__item__price__cost' id='cart-item-price-138'>385</strong> руб.
                </span>
                <span className='checkout__block__item__simbol _right'>х</span>
              </div>
            </div>

            <div className='checkout__block__item _table _item-count'>
              <div className='checkout__block__item__content _no_pl _no_pr'>
                <div className='checkout__block__item__count js-product-count'>
                  <Counter />
                </div>
              </div>
            </div>

            <div className='checkout__block__item _table _item-price'>
              <div className='checkout__block__item__content _no_pl'>
                <span className='checkout__block__item__simbol _left'/>
                <div className='checkout__block__item__result'>
                  <strong className='checkout__block__item__result__cost' id='cart-item-total-138'>385</strong> руб.
                </div>
              </div>
            </div>

            <div className='checkout__block__item _table _item-remove'>
              <div className='checkout__block__item__content _no_pl _no_pr'>
                <button className='checkout__block__item__remove'>
                  Удалить из корзины
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
