import * as React from 'react'
import styled from 'styled-components'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Checkbox from './'
import 'jest-styled-components'

test('Checkbox changes the text after click', () => {
  const checkbox = shallow(<Checkbox labelOn='On' labelOff='Off' />)
  // const checkbox = styled(Checkbox)``
  const input = checkbox.find(styled.input)

  // // Interaction demo
  // expect(checkbox.text()).toEqual('Off')

  console.log('input.length: ', input.length)

  // expect(input.length).toEqual(1)

  // input.simulate('ca', {keyCode: 27})
  // input.simulate('change')

  // expect(store.getActions()[0]).to.deep.equal(expectedAction);

  console.log(checkbox.debug())
  console.log(checkbox.find('styled.input'))
  console.log(input)

  // checkbox.find('styled.input').simulate('change')

  // // checkbox.find('styled.input').simulate('change')

  // // expect(checkbox.text()).toEqual('On')

  // // Snapshot demo
  // expect(checkbox).toMatchSnapshot()
})
