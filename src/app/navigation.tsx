import * as React from 'react'

import { routes } from './routes'
import { StyledList, StyledLink } from './styles'

export interface P {
  onMouseEnter: (component: any) => void;
}

export default function Navigation ({ onMouseEnter }: P) {
  return (
    <StyledList>
      {routes && routes.map(({ label, component, ...link }: any) => (
        <li key={link.to}>
          <StyledLink {...link} onMouseEnter={() => onMouseEnter(component)}>
            {label}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  )
}
