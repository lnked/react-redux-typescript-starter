import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    your: 'state',
  }),
}));

const useMock: any = [(k: any) => k, {}];
useMock.t = (k: any) => k;
useMock.i18n = {};

jest.mock('react-i18next', () => ({
  useTranslation: () => useMock,
}));

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
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe');
  });

  test('has correct input value', () => {
    render(<App />);
    expect(screen.getByRole('form')).toHaveFormValues({
      firstName: 'John',
      lastName: 'Doe',
    });
  });
});
