import * as React from 'react'

import Product from './components/product'
import { StylesProducts } from './components/styles'

export default class Shop extends React.Component<{}, {}> {
  render () {
    return (
      <StylesProducts>
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
        <Product
          name='Shae'
          image='https://m.media-amazon.com/images/I/71z3-+yLtmL._AC_SX255_.jpg'
        />
      </StylesProducts>
    )
  }
}
