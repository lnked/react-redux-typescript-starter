import * as React from 'react'

import { routes } from 'app/routes'
import {
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './styles'

function Navigation() {
  return (
    <NavigationList>
      {routes && routes.map(({ label, component, ...link }: any) => (
        <NavigationItem key={link.to}>
          <NavigationLink {...link} component={component}>
            {label}
          </NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  )
}

export default Navigation
