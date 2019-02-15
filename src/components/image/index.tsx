import * as React from 'react'
import { StyledImage } from './styles'

export interface P {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
}

export function Image ({ src, alt = '', ...attrs }: P) {
  return (
    <StyledImage
      {...attrs}
      src={src}
      alt={alt}
    />
  )
}

export default Image
