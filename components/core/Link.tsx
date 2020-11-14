import { ReactNode } from "react";
import * as _ from "styled-components/cssprop";
import styled, { CSSObject } from "styled-components";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = {
  children: ReactNode;
  css?: CSSObject;
  href: NextLinkProps["href"];
  NextLinkProps?: NextLinkProps;
};

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  cursor: pointer;
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
  :focus {
    ${({ theme }) => theme.focusRing};
  }
`;
export const Link = ({ children, href, NextLinkProps, ...rest }: LinkProps) => (
  <NextLink passHref href={href} {...NextLinkProps}>
    <StyledAnchor {...rest}>{children}</StyledAnchor>
  </NextLink>
);
