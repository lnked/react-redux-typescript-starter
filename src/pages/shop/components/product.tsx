import * as React from 'react'

import {
  StyledDescription,
  StyledProduct,
  StyledLabel,
  StyledBrand,
  StyledName,
  StyledImage,
  StyledSource,
  StyledFooter,
  StyledPrice,
} from './styles'

export interface ProductProps {
  name: string;
  image: string;
}

export default function Product ({ name, image }: ProductProps) {
  return (
    <StyledProduct itemscope itemtype='http://schema.org/Product'>
      <StyledLabel>New</StyledLabel>

      <StyledImage>
        <StyledSource src={image} alt={name} />
      </StyledImage>

      <StyledDescription>
        {/* <button>Like <span>0</span></button> */}
        <StyledBrand>Deer Stags</StyledBrand>
        <StyledName>Shae</StyledName>

        <StyledFooter>
          <StyledPrice>$45.99</StyledPrice>
          <StyledPrice discount>MSRP: $65.00</StyledPrice>
        </StyledFooter>
      </StyledDescription>
    </StyledProduct>
  )
}
