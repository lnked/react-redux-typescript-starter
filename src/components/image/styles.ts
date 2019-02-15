import styled from 'styled-components'

export const StyledImage = styled.img`
  border: 1px solid lime;
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`
