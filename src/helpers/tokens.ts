import { ComponentType } from 'react';
import styled, { css } from 'styled-components/macro';

type ComponentProps<T> = T extends ComponentType<infer P> ? JSX.LibraryManagedAttributes<T, P> : never;

export const filterProps = <T extends any>(tag: ComponentProps<T> | any, props: string[] = []) =>
  styled(tag).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => !props.includes(prop as string) && defaultValidatorFn(prop),
  });

export const truncate = (width: { width: string }) => css`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// ${truncate('100px')}

export const media = {
  mobile: (args: TemplateStringsArray) => css`
    @media (max-width: 420px) {
      ${css(args)};
    }
  `,

  tablet: (args: TemplateStringsArray) => css`
    @media (max-width: 768px) {
      ${css(args)};
    }
  `,
};

// const Box = styled.div`
//   ${media.mobile`
//     font-size: 14px;
//   `};
// `;
