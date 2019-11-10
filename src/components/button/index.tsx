import * as React from 'react';

import { StyledButton } from './styles';

export interface OuterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactChild[] | string;
  children?: React.ReactChild[] | string;
  disabled?: boolean;
}

const Button: React.FC<OuterProps> = ({ children, label, disabled, ...props } = {}) => (
  <StyledButton type="button" aria-disabled={disabled} disabled={disabled} {...props}>
    {children || label}
  </StyledButton>
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

// function areEqual(prevProps, nextProps) {
//   /*
//   возвращает true, если nextProps рендерит
//   тот же результат что и prevProps,
//   иначе возвращает false
//   */
// }

// export default React.memo(Button, areEqual);

export default React.memo(Button);

// export default Button;
