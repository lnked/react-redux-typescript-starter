const { __DEV__, __PROD__, NODE_ENV = 'production' } = process.env;

export interface OuterProps {
  production: boolean;
  development: boolean;
}

export const environment: OuterProps = {
  production: Boolean(__PROD__) || NODE_ENV === 'production',
  development: Boolean(__DEV__) || NODE_ENV === 'development',
};
