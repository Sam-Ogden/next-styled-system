import {
  layout,
  space,
  border,
  flexbox,
  position,
  background,
  shadow,
  PositionProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  FlexboxProps,
  BackgroundProps,
  ShadowProps,
} from "styled-system";
import styled from "styled-components";
import { HTMLProps } from "react";

type StyledProps = LayoutProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundProps &
  ShadowProps;

export type BoxProps = StyledProps &
  Omit<HTMLProps<HTMLDivElement>, "ref" | "as">;
export const Box = styled.div<StyledProps>`
  ${layout}
  ${space}
  ${border}
  ${flexbox}
  ${position}
  ${background}
  ${shadow}
`;
