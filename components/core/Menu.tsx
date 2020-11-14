import { forwardRef, MouseEvent, Ref, useRef } from "react";
import * as _ from "styled-components/cssprop";
import { CSSObject } from "styled-components";
import css from "@styled-system/css";
import { FaBars, FaTimes } from "react-icons/fa";

import { Button as CoreButton, ButtonProps } from ".";
import { Scrim, Box, BoxProps, ScrimProps } from "../layout";
import { useToggle, useKeyDown } from "../../hooks";

export type MenuButtonProps = ButtonProps & { open?: boolean };
export type MenuProps = BoxProps & {
  MenuButton?: (props: MenuButtonProps) => JSX.Element;
  MenuButtonProps?: MenuButtonProps;
  ScrimProps?: ScrimProps;
  css?: CSSObject;
  className?: string;
  open?: boolean;
  onClick?: (event: MouseEvent) => void;
  onClose?: () => void;
};

const DefaultMenuButton = forwardRef(function MenuButton(
  { open, ...rest }: MenuButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <CoreButton
      variant='outlined'
      css={{ lineHeight: 0 }}
      aria-label='menu'
      ref={ref}
      {...rest}
    >
      {open ? <FaTimes /> : <FaBars />}
    </CoreButton>
  );
});

export const Menu = ({
  MenuButton = DefaultMenuButton,
  MenuButtonProps,
  ScrimProps,
  css: contextStyles,
  open,
  onClose,
  children,
  ...rest
}: MenuProps) => {
  const [uncontrolledMenuOpen, toggleMenuOpen] = useToggle(false);
  const menuOpen = open ?? uncontrolledMenuOpen;
  const menuButtonRef = useRef(null);
  const focusMenuButton = () => menuButtonRef.current.focus();

  const handleClose = () => {
    toggleMenuOpen();
    onClose && onClose();
  };

  const handleKeyDown = useKeyDown(["Escape"], () => {
    handleClose();
    focusMenuButton();
  });

  const handleClick = () => toggleMenuOpen();

  return (
    <>
      <Box>
        <MenuButton
          onClick={handleClick}
          ref={menuButtonRef}
          open={menuOpen}
          type='button'
          {...MenuButtonProps}
        />
      </Box>
      {menuOpen && (
        <Box
          position='absolute'
          top={60}
          right={3}
          borderRadius={4}
          padding={2}
          boxShadow='lg'
          background='white'
          css={css((theme) => ({
            border: `${theme.borderWidth.default} solid ${theme.colors.gray[500]}`,
            zIndex: theme.zIndex[40],
            minWidth: theme.space[6],
          }))}
          role='menu'
          {...rest}
          onKeyDown={handleKeyDown}
        >
          {children}
          <span tabIndex={0} onFocus={focusMenuButton} />
          <Scrim
            onClick={handleClose}
            onTouchStart={handleClose}
            {...ScrimProps}
          />
        </Box>
      )}
    </>
  );
};
