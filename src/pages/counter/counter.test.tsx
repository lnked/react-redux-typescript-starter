import * as React from 'react'
import renderer from 'react-test-renderer'

import Counter from './'

const tree: any = renderer.create(<Counter initialCount={3} />).toJSON()

describe('<Counter />', () => {
  it('t-1', done => {
    expect(tree.type).toBe('div')
    done()
  })
})
