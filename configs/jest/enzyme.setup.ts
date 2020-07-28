import { configure, shallow, render, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

configure({
  adapter: new Adapter(),
});

global.shallow = shallow;
global.render = render;
global.toJson = toJson;
global.mount = mount;

// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', (message: any) => {
  throw new Error(message);
});
