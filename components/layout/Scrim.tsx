import { HTMLProps, useEffect, useState, Ref } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vh;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex[30]};
`;

export type ScrimProps = Omit<HTMLProps<HTMLDivElement>, "ref" | "as"> & {
  ref?: Ref<HTMLDivElement>;
};
export const Scrim = ({ children, id = "scrim-root", ...rest }: ScrimProps) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const element = document.createElement("div");
    element.setAttribute("id", id);
    document.body.append(element);
    setElement(element);
  }, []);

  return element
    ? createPortal(<StyledDiv {...rest}>{children}</StyledDiv>, element)
    : null;
};
