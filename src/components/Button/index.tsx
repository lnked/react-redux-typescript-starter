import { ButtonHTMLAttributes, ReactChild, PropsWithChildren } from 'react';

import { Control } from './styles';

export type OuterProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: ReactChild[] | string;
  disabled?: boolean;
};

const defaultButtonProps = {};

export const Button = ({ children, label, disabled, ...props }: PropsWithChildren<OuterProps> = defaultButtonProps) => (
  <Control type="button" aria-disabled={disabled} disabled={disabled} {...props}>
    {children || label}
  </Control>
);

// export class AnchorButton extends AbstractButton<AnchorHTMLAttributes<HTMLAnchorElement>> {
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
