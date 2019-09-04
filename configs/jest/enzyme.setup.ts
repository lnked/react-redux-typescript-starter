import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

configure({
  adapter: new Adapter(),
})

// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', (error: any) => {
  console.log(error)
})
