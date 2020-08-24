import * as React from 'react';

import { Container } from './styles';

function ErrorFallback({ error, componentStack, resetErrorBoundary }: any) {
  return (
    <Container role="alert">
      <p>Something went wrong:</p>

      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>

      <button onClick={resetErrorBoundary}>Try again</button>
    </Container>
  );
}

export default ErrorFallback;
