import * as React from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
// import { observer } from 'mobx-react'

import {
  Container,
  Categories,
  Sidebar,
  Products,
  Product,
} from './styles'

export interface OuterProps extends RouteComponentProps {
  history: any;
}

import { productsList } from './products'
import { categoriesList } from './categories'

// @observer
class Shop extends React.Component<OuterProps, {}> {
  render () {
    const { match: { params } } = this.props

    return (
      <Container>
        <Sidebar>
          {JSON.stringify(params)}

          <Categories>
            {categoriesList.map(({ id, name }: any) => (
              <li key={id}>
                <NavLink to={`/shop/category-${id}`}>{name}</NavLink>
              </li>
            ))}
          </Categories>
        </Sidebar>

        <Products>
          {productsList.map(product => (
            <Product
              {...product}
              key={product.id}
              slug={`product-${product.id}`}
              badge="Хит продаж"
            />
          ))}
        </Products>
      </Container>
    )
  }
}

export default Shop
