import styled from "styled-components";

export type StackProps = { space: number | string };
export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  & *:not(:first-child) {
    margin-top: ${({ theme, space }) => `${theme.space[space]}px`};
  }
`;
