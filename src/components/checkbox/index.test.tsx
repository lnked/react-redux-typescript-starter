import * as React from 'react'
// import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { render } from 'react-testing-library'

import Checkbox from './'

const tree: any = renderer.create(<Checkbox />).toJSON()

test('it works', () => {
  const input = tree.children.find((item: any) => item.type === 'input')

  // console.log(input, input.props)

  expect(input.props.value).toBe(1)
  expect(input.props.checked).toBeFalsy()
  // expect(input.props.checked).toBeTruthy()

  // input.simulate('change', { target: { value: 'Hello' } })
})

test('renders correctly', () => {
  const { container } = render(<Checkbox checked />)
  expect(container.firstChild).toMatchSnapshot()
})

// it('renders correctly', () => {
//   const wrapper = shallow(<Checkbox labelOn='On' labelOff='Off' />)
//   expect(wrapper).toMatchSnapshot()
//   // const tree = renderer.create(<StyledCheckbox labelOn='On' labelOff='Off' />).toJSON()
//   // expect(tree).toMatchSnapshot()
//   // expect(tree).toHaveStyleRule('labelOn', 'On')
// })
