import { HTMLProps } from "react";
import * as _ from "styled-components/cssprop";
import styled, { CSSObject } from "styled-components";
import {
  typography,
  textAlign,
  color,
  TypographyProps,
  TextAlignProps,
  ColorProps,
} from "styled-system";
import css from "@styled-system/css";

export type TextProps = HTMLProps<HTMLParagraphElement> & {
  css?: CSSObject;
};

export const Text = styled.p<TypographyProps & TextAlignProps & ColorProps>(
  css((theme) => ({
    color: theme.colors.typography.body,
    fontSize: theme.fontSizes.body,
    my: 3,
  })),
  typography,
  textAlign,
  color
);
