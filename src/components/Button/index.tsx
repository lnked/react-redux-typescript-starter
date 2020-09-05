import * as React from 'react';

import { Control } from './styles';

export type OuterProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: React.ReactChild[] | string;
  children?: React.ReactChild[] | string;
  disabled?: boolean;
};

export const Button: React.FC<OuterProps> = ({ children, label, disabled, ...props } = {}) => (
  <Control type="button" aria-disabled={disabled} disabled={disabled} {...props}>
    {children || label}
  </Control>
);

// export class AnchorButton extends AbstractButton<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
//   public static displayName = `AnchorButton`;

//   public render() {
//       const { href, tabIndex = 0 } = this.props;

//       return (
//           <a
//               role="button"
//               {...removeNonHTMLProps(this.props)}
//               {...commonProps}
//               href={commonProps.disabled ? undefined : href}
//               tabIndex={commonProps.disabled ? -1 : tabIndex}
//           >
//               {this.renderChildren()}
//           </a>
//       );
//   }
// }

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  children: '',
};

