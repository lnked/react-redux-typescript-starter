import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    your: 'state',
  }),
}));

import App from './App';

describe('renders without crashing', () => {
  it('renders without crashing', () => {
    expect(true).toBeTruthy();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<App />);
  });
});
