const { __DEV__, __PROD__, NODE_ENV = 'production' } = process.env;

export type EnvironmentProps = {
  production: boolean;
  development: boolean;
}

export const environment: EnvironmentProps = {
  production: Boolean(__PROD__) || NODE_ENV === 'production',
  development: Boolean(__DEV__) || NODE_ENV === 'development',
};
