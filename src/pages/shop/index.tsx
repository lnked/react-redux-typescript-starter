import * as React from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'

import Product from './components/product'
import { Container, Categories, Sidebar, Products } from './styles'

// export interface P extends RouteComponentProps {}

import { productsList } from './products'
import { categoriesList } from './categories'

export default class Shop extends React.Component<RouteComponentProps, {}> {
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
          {productsList.map(product => {
            const props = {
              ...product,
              slug: `product-${product.id}`,
              badge: 'Хит продаж',
            }

            return (
              <Product key={product.id} {...props} />
            )
          })}
        </Products>
      </Container>
    )
  }
}
