import * as React from 'react'

import {
  Description,
  ProductItem,
  Upper,
  Link,
  Label,
  Brand,
  Name,
  Image,
  Source,
  Footer,
  Price,
} from './styles'

export interface ProductProps {
  name: string;
  slug: string;
  image: string;
  badge?: string;
}

export default function Product ({ slug = '', badge, name, image }: ProductProps) {
  const root = '/shop'

  return (
    <ProductItem itemscope itemtype="http://schema.org/Product">
      <Link to={`${root}/${slug}`}>
        <Upper>
          {badge && <Label>{badge}</Label>}

          {image &&
            <Image>
              <Source src={image} alt={name} />
            </Image>
          }
        </Upper>
      </Link>

      <Description>
        {/* <button>Like <span>0</span></button> */}
        <Brand>Deer Stags</Brand>
        <Name>Shae</Name>

        <Footer>
          <Price>$45.99</Price>
          <Price discount>MSRP: $65.00</Price>
        </Footer>
      </Description>
    </ProductItem>
  )
}
