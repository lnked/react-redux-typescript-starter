import * as React from 'react';
// import Raven from 'raven-js'

import { StyledError, StyledDetails } from './styles';

export interface OuterProps {
  children: JSX.Element | JSX.Element[] | string;
}

export interface InnerState {
  error: Error | boolean;
  info: any;
}

// https://www.digitalocean.com/community/tutorials/react-error-boundaries
export class ErrorBoundary extends React.PureComponent<OuterProps, InnerState> {
  state = {
    info: null,
    error: false,
  };

  static getDerivedStateFromError(error: Error | boolean) {
    return { hasError: true, info: error };
  }

  componentDidCatch(error: Error | boolean, info: any) {
    this.setState({ error, info }, () => {
      // Raven.captureException(error, { extra: info })
    });
  }

  render() {
    const { error, info } = this.state;

    if (error) {
      return (
        <StyledError>
          <h1>Something went wrong.</h1>

          <StyledDetails>
            {JSON.stringify(info)}
          </StyledDetails>
        </StyledError>
      );
    }

    return this.props.children;
  }
}

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     // Обновляем состояние, чтобы следующее отображение
//     // показало интерфейс на случай ошибок
//     return { hasError: true };
//   }
//   componentDidCatch(error, info) {
//     // Также можно залогировать ошибку
//     logErrorToMyService(error, info);
//   }
//   render() {
//     if (this.state.hasError) {
//       // Можно отобразить любой интерфейс на случай ошибок
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }
