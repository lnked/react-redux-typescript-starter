import * as React from 'react';

import { Link } from './styled';

export interface OuterProps {
  label?: string;
  children?: React.ReactChild[] | string;
  component?: any;
}

let timeout: any = null;

// import { Link } from 'react-router-dom'
// ...
// const LinkWithPreload = ({ to, onPreload, ...rest }) => {
//   return (
//     <Link
//       to={to}
//       onMouseEnter={() => preloadRouteComponent(to)}
//       {...rest}
//     />
//   );
// };
// export default LinkWithPreload;

const PreloadLink: React.FC<OuterProps> = (props: OuterProps) => {
  const { label, children, component, ...restProps } = props;

  console.log('timeout: ', timeout);

  const handleMouseEnter = () => {
    console.log('mouse enter')
    clearTimeout(timeout);
    console.log('component && component.preload: ', component, component.preload)
    timeout = setTimeout(() =>
      component && component.preload && component.preload()
    , 250);
  }

  return (
    <Link {...restProps} onMouseEnter={handleMouseEnter}>
      {children || label}
    </Link>
  );
}

// class PreloadLink extends React.Component<OuterProps, void> {
//   timeout: any = null;

//   handleMouseEnter = () => {
//     const { component } = this.props;

//     clearTimeout(this.timeout);

//     this.timeout = setTimeout(() =>
//       component && component.preload && component.preload()
//     ,                         250);
//   }

//   render () {
//     const { label, children, component, ...props } = this.props;

//     return (
//       <Link {...props} onMouseEnter={this.handleMouseEnter}>
//         {children || label}
//       </Link>
//     );
//   }
// }

export default PreloadLink;
