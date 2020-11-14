import * as _ from "styled-components/cssprop";
import styled from "styled-components";
import { variant, space, SpaceProps } from "styled-system";
import { HTMLProps, Ref } from "react";
export type ButtonProps = Omit<
  HTMLProps<HTMLButtonElement>,
  "size" | "ref" | "type" | "as"
> & {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger" | "warning" | "info" | "success";
  variant?: "contained" | "outlined" | "text";
  ref?: Ref<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
} & SpaceProps;

export const Button = styled("button")<ButtonProps>(
  ({ theme }) => ({
    borderRadius: theme.radii[3],
    cursor: "pointer",
    "&:focus": {
      ...theme.focusRing,
    },
  }),
  ({ theme, color }) =>
    variant({
      variants: {
        contained: {
          border: "none",
          bg: theme.colors[color].default,
          color: theme.colors[color].contrast,
          "&:hover, &:focus": {
            bg: theme.colors[color].light,
          },
          "&:active": {
            bg: theme.colors[color].dark,
          },
        },
        outlined: {
          background: "none",
          border: `${theme.borderWidth[2]} solid ${theme.colors[color].default}`,
          color: theme.colors[color].default,
          "&:hover, &:focus": {
            bg: theme.colors[color].default,
            color: theme.colors[color].contrast,
          },
          "&:active": {
            bg: theme.colors[color].dark,
            color: theme.colors[color].contrast,
          },
        },
        text: {
          border: "none",
          background: "none",
          color: theme.colors[color].default,
          "&:hover, &:focus": {
            bg: theme.colors[color].default,
            color: theme.colors[color].contrast,
          },
          "&:active": {
            bg: theme.colors[color].dark,
            color: theme.colors[color].contrast,
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      small: {
        px: 2,
        py: 1,
        fontSize: 1,
      },
      medium: {
        px: 3,
        py: 2,
        fontSize: "body",
      },
      large: {
        px: 4,
        py: 2,
        fontSize: 6,
      },
    },
  }),
  space
);

Button.defaultProps = {
  color: "primary",
  size: "medium",
  variant: "contained",
  type: "button",
};
