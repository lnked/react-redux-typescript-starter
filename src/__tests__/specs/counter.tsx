// src/components/__tests__/counter_spec.tsx
import * as React from 'react'
// import * as TestUtils from 'react-dom/test-utils'
import * as ShallowRenderer from 'react-test-renderer/shallow'

// import { createStore } from 'redux'

import Counter from '../../pages/counter'
// import { reducers } from '../../reducers'

describe('<Counter />', () => {
  it('renders', () => {
    // const store = createStore(reducers)
    const renderer = ShallowRenderer.createRenderer()

    // <Counter store={store} />

    expect(renderer.render(<Counter initialCount={3} />)).toMatchSnapshot()
  })

  it('t-1', () => {
    const renderer = ShallowRenderer.createRenderer()
    renderer.render(<Counter initialCount={3} />)
    const result: any = renderer.getRenderOutput()
    expect(result.type.target).toBe('div')
  })
})
