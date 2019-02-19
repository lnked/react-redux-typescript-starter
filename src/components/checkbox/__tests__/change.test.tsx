import * as React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '../'

// import renderer from 'react-test-renderer'

// it('render correctly text component', () => {
//   const TextInputComponent = renderer.create(<TextInput />).toJSON();
//   expect(TextInputComponent).toMatchSnapshot();
// });

// test('it works', () => {
//   const tree = renderer.create(<Button />).toJSON()
//   expect(tree).toMatchSnapshot()
// })

// import styled from 'styled-components'
// import renderer from 'react-test-renderer'
// import 'jest-styled-components'

// const Button = styled.button`
//   color: red;
// `

// test('it works', () => {
//   const tree = renderer.create(<Button />).toJSON()
//   expect(tree).toMatchSnapshot()
//   expect(tree).toHaveStyleRule('color', 'red')
// })

// test('simulate valueChange', () => {
//   const fn = jest.fn()

//   const Switch = ({ props }) => <div {...props} />
//   const StyledSwitch = styled(Switch)``
//   const CameraSettings = () => <StyledSwitch onValueChange={fn} />

//   const wrapper = shallow(<CameraSettings />)

//   const render = wrapper.dive()
//   render.find('Switch').forEach(child => child.simulate('valueChange'))

//   expect(fn).toBeCalled()
// })

// test('can search for and select "banana"', () => {
//   const onChange = jest.fn()
//   const wrapper = mount(<FruitAutocomplete onChange={onChange} />)
//   const input = wrapper.find('input')
//   input.simulate('change', {target: {value: 'banana'}})
//   input.simulate('keydown', {key: 'ArrowDown'})
//   input.simulate('keydown', {key: 'Enter'})
//   expect(onChange).toHaveBeenCalledTimes(1)
//   const downshift = expect.any(Object)
//   expect(onChange).toHaveBeenCalledWith('banana', downshift)
//   expect(input.instance().value).toBe('banana')
// })

test('Checkbox changes the text after click', () => {
  const checkbox = shallow(<Checkbox labelOn='On' labelOff='Off' />)

  // Snapshot demo
  // expect(checkbox).toMatchSnapshot()
})
