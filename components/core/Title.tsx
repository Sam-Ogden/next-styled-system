import * as _ from "styled-components/cssprop";
import styled from "styled-components";
import css from "@styled-system/css";

export const Title = styled("h1")(
  css((theme) => ({
    color: theme.colors.typography.heading,
    fontSize: theme.fontSizes.h1,
    margin: 0,
  }))
);
