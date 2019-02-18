import * as React from 'react'
import { StyledImage } from './styles'

export interface P {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
}

function Image ({ src, alt = '', ...attrs }: P) {
  return (
    <StyledImage
      {...attrs}
      src={src}
      alt={alt}
    />

    // <picture>
    //   <source srcset="https://i5.walmartimages.com/[hash].webp?..." type="image/webp">
    //   <img src="https://i5.walmartimages.com/[hash].jpeg?...">
    // </picture>

    // --- Serve Retina images with <source srcset>. Like this ---
    // <picture>
    //   <source
    //     srcset="https://i5.walmartimages.com/[hash].webp?odnHeight=450&odnWidth=450,
    //       https://i5.walmartimages.com/[hash].webp?odnHeight=900&odnWidth=900 2x"
    //     type="image/webp"
    //   >
    //   <img
    //     src="https://i5.walmartimages.com/[hash].jpeg?odnHeight=450&odnWidth=450"
    //     srcset="https://i5.walmartimages.com/[hash].jpeg?odnHeight=900&odnWidth=900 2x"
    //   >
    // </picture>
  )
}

export default Image
