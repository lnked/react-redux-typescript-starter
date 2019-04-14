import * as React from 'react'

import { routes } from './routes'
import { StyledList, StyledLink } from './styles'

export default function Navigation () {
  return (
    <StyledList>
      {routes && routes.map(({ label, component, ...link }: any) => (
        <li key={link.to}>
          <StyledLink {...link} component={component}>
            {label}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  )
}
