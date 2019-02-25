// import styled from 'styled-components'
import styled from '@emotion/styled'

export const StyledPicture = styled.picture`
  border: 1px solid lime;
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`

export const StyledImg = styled.img`
  border: 1px solid lime;
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`
