import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { addSerializer } from 'jest-specific-snapshot';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import 'jest-styled-components';

addSerializer(styleSheetSerializer);

Enzyme.configure({
  adapter: new Adapter(),
});

declare global {
  interface Window {
    shallow: any;
    render: any;
    mount: any;
    toJson: any;
  }
}

// @ts-ignore
global.shallow = Enzyme.shallow;
// @ts-ignore
global.render = Enzyme.render;
// @ts-ignore
global.mount = Enzyme.mount;
// @ts-ignore
global.toJson = toJson;

// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', (message: any) => {
  throw new Error(message);
});
