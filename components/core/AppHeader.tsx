import { FunctionComponent, HTMLProps } from "react";
import * as _ from "styled-components/cssprop";
import { CSSObject } from "styled-components";
import css from "@styled-system/css";

import { StyledAnchor, Menu } from ".";
import { Box } from "../layout";
import { useToggle } from "../../hooks";

export type AppHeaderProps = {
  css?: CSSObject;
  className?: string;
  Links: FunctionComponent<HTMLProps<HTMLAnchorElement> & { mobile: boolean }>;
  Logo: FunctionComponent;
};

export const AppHeader = ({
  css: contextStyles,
  Links,
  Logo,
  ...rest
}: AppHeaderProps) => {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        position='sticky'
        top={0}
        py={2}
        px={[3, 0]}
        background={"white"}
        css={css((theme) => ({ zIndex: theme.zIndex[40] }))}
        role='navigation'
        {...rest}
      >
        <Box
          display='flex'
          height={35}
          width={["100%", "75%", "50%"]}
          alignItems='center'
        >
          <Box flexGrow={1}>
            <Logo />
          </Box>
          <Box
            css={css({
              [StyledAnchor]: {
                "&:not(:last-child)": {
                  marginRight: 2,
                },
              },
              display: ["none", "block"],
            })}
            role='menu'
          >
            <Links role='menu-item' mobile={false} />
          </Box>
          <Box
            display={["block", "none"]}
            css={css(() => ({
              [StyledAnchor]: {
                display: "block",
                padding: 1,
                "&:not(:last-child)": {
                  mb: 2,
                },
                "&:last-of-type": {
                  mb: 0,
                },
              },
            }))}
          >
            <Menu
              open={menuOpen}
              onClose={toggleMenuOpen}
              MenuButtonProps={{ onClick: toggleMenuOpen }}
            >
              <Links onClick={toggleMenuOpen} role='menu-item' mobile />
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};
