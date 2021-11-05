import { Container } from './styles';
import { OuterProps } from './types';

export const Icon = (props: OuterProps) => {
  return <Container {...props} />;
};

Icon.displayName = 'Icon';

// import * as React from 'react';
// import SVG from 'react-inlinesvg';

// export type Props = {
//   type: any;
// }

// export const Icon = ({ type, ...props }: Props) => <SVG src={type} {...props} />;

// Icon.displayName = 'Icon';

// export default Icon;

// {/* <SVG
//   baseURL="/home"
//   cacheRequests={true}
//   description="The React logo"
//   loader={<span>Loading...</span>}
//   onError={error => console.log(error.message)}
//   onLoad={(src, hasCache) => console.log(src, hasCache)}
//   preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
//   src="https://cdn.svgporn.com/logos/react.svg"
//   title="React"
//   uniqueHash="a1f8d1"
//   uniquifyIDs={true}
// /> */}
