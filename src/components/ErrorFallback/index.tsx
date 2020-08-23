import * as React from 'react';

function ErrorFallback({ error, componentStack, resetErrorBoundary }: any) {
  return (
    <div role="alert" style={{ padding: '20px' }}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
