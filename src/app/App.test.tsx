import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';

import App from './App';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

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
    const root = createRoot(div);

    root.render(<App />);
    root.unmount();
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
