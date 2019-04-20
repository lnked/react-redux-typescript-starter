import * as React from 'react'

function lazyWithPreload(factory: any) {
  const Component: any = React.lazy(factory)
  Component.preload = factory
  return Component
}

export { lazyWithPreload }
