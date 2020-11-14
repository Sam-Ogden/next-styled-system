import * as _ from "styled-components/cssprop";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import css from "@styled-system/css";

export const Input = styled("input")<SpaceProps>(
  ({ theme }) =>
    css({
      borderRadius: 4,
      border: `2px solid ${theme.colors.gray[500]}`,
      cursor: "pointer",
      fontSize: "body",
      padding: 2,
      color: theme.colors.typography.body,
      width: ["100%", theme.space[7]],
      "&:focus": {
        outline: "none",
        borderColor: theme.colors.primary.default,
      },
    }),
  space
);
