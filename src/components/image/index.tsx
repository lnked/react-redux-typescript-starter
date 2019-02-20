import * as React from 'react'
import { StyledPicture, StyledImg } from './styles'

export interface P {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
}

function Image ({ src, alt = '', ...attrs }: P) {
  return (
    <StyledPicture>
      {/* <source srcSet='[hash].webp' type='image/webp' /> */}
      <StyledImg {...attrs} src={src} alt={alt} />
    </StyledPicture>
  )
}

export default Image
