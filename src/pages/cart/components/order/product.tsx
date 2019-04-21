import * as React from 'react';

import Photo from './components/photo';
import Counter from './components/counter';

export interface OuterProps {
  id: number;
  link: string;
}

export function Product({ id, link }: OuterProps) {
  return (
    <div id={`table-product-${id}`}>
      <Photo
        src="http://www.to2ko.ru/upload_dir/f251e28a_4820_sm_crop.jpg"
      />

      <div>
        <div>
          <div>
            <div>
              <a href={link} data-product="138">
                Филадельфия креветка
              </a>

              <span>3 марта 2019, 21:58</span>
            </div>
          </div>

          <div>
            <div>
              <div>
                <span>
                  <strong id="cart-item-price-138">385</strong> руб.
                </span>
                <span>х</span>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <Counter />
                </div>
              </div>
            </div>

            <div>
              <div>
                <span/>
                <div>
                  <strong id="cart-item-total-138">385</strong> руб.
                </div>
              </div>
            </div>

            <div>
              <div>
                <button>
                  Удалить из корзины
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
