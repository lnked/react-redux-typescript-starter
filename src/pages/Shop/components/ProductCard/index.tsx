import * as React from 'react';

import {
  Card,
  Description,
  Name,
  Brand,
  Link,
  Image,
  Label,
  Footer,
  Price,
  Like,
} from './style';

export interface OuterProps {
  name: string;
  slug: string;
  image: string;
  brand?: string;
  badge?: string;
}

export const ProductCard: React.FC<OuterProps> = (props: OuterProps) => {
  const root = '/shop';
  const { slug, name, badge, brand, image } = props;

  return (
    <Card {...props} itemscope itemtype="http://schema.org/Product">
      <Link to={`${root}/${slug}`}>
        {badge && <Label>{badge}</Label>}

        {image &&
          <Image src={image} alt={name} />
        }
      </Link>

      <Description>
        <Like>Like <span>0</span></Like>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <Footer>
          <Price>$45.99</Price>
          <Price discount>MSRP: $65.00</Price>
        </Footer>
      </Description>
    </Card>
  );
};

ProductCard.displayName = 'ProductCard';

ProductCard.defaultProps = {
  slug: '',
};

export default ProductCard;
