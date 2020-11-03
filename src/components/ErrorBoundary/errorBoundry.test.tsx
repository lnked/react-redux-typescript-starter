import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { ErrorBoundary } from './';

function ProblemChild() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

describe('<ErrorBoundary> window', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<ErrorBoundary>Test</ErrorBoundary>).toJSON();
    expect(tree).toBeTruthy();
  });

  it('should display an ErrorMessage if wrapped component throws', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    const error = new Error('test');

    wrapper.find(ProblemChild).simulateError(error);
  });

  it('displays error message on error generated by child', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    wrapper.setState({ hasError: true });
    // console.log(wrapper.debug())
  });

  // it('displays error message on error generated by child', () => {
  //   const wrapper = mount(
  //     <ErrorBoundary >
  //       <ProblemChild />
  //     </ErrorBoundary>
  //   );

  //   // console.log(wrapper.debug())
  // });
});
