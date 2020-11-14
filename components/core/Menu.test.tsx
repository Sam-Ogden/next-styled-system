import { forwardRef } from "react";
import { render, fireEvent, userEvent } from "../../test-utils";
import { Menu } from ".";

const items = ["item-1", "item-2"];
describe("Menu component", () => {
  test("should render custom button", () => {
    const { getByText } = render(
      <Menu
        MenuButton={forwardRef((props, ref) => (
          <button ref={ref} {...props}>
            test-button
          </button>
        ))}
      >
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </Menu>
    );
    expect(getByText("test-button")).toBeDefined();
  });

  test("should open menu", () => {
    const { getByTestId, getByText } = render(
      <Menu MenuButtonProps={{ "data-testid": "button" } as any}>
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </Menu>
    );
    fireEvent.click(getByTestId("button"));
    items.forEach((item) => expect(getByText(item)).toBeDefined());
  });

  test("should close menu", () => {
    const { getByTestId, queryByText } = render(
      <Menu MenuButtonProps={{ "data-testid": "button" } as any}>
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </Menu>
    );
    fireEvent.click(getByTestId("button"));
    fireEvent.click(getByTestId("button"));
    items.forEach((item) => expect(queryByText(item)).toBeNull());
  });

  test("should close menu with esc and focus button", () => {
    const { getByTestId, queryByText, getByText } = render(
      <Menu MenuButtonProps={{ "data-testid": "button" } as any}>
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </Menu>
    );
    fireEvent.click(getByTestId("button"));
    fireEvent.focus(getByText(items[0]));
    fireEvent.keyDown(getByText(items[0]), { key: "Escape" });
    items.forEach((item) => expect(queryByText(item)).toBeNull());
    expect(getByTestId("button")).toHaveFocus();
  });

  test("should focus menu button", () => {
    const { getByTestId, getByText } = render(
      <Menu MenuButtonProps={{ "data-testid": "button" } as any}>
        {items.map((i) => (
          <a key={i}>{i}</a>
        ))}
      </Menu>
    );
    fireEvent.click(getByTestId("button"));
    fireEvent.focus(getByText(items[1]));
    userEvent.tab();
    expect(getByTestId("button")).toHaveFocus();
  });

  test("should close on click away", () => {
    const { getByTestId, queryByText } = render(
      <>
        <p>body</p>
        <Menu
          MenuButtonProps={{ "data-testid": "button" } as any}
          ScrimProps={{ "data-testid": "scrim" } as any}
        >
          {items.map((i) => (
            <a key={i}>{i}</a>
          ))}
        </Menu>
      </>
    );
    fireEvent.click(getByTestId("button"));
    fireEvent.click(getByTestId("scrim"));
    expect(queryByText(items[0])).toBeNull();
  });

  describe("controlled", () => {
    test("should not render items", () => {
      const { queryByText } = render(
        <Menu open={false}>
          {items.map((i) => (
            <a key={i}>{i}</a>
          ))}
        </Menu>
      );
      items.forEach((item) => expect(queryByText(item)).toBeNull());
    });

    test("should render items", () => {
      const { queryByText } = render(
        <Menu open>
          {items.map((i) => (
            <a key={i}>{i}</a>
          ))}
        </Menu>
      );
      items.forEach((item) => expect(queryByText(item)).toBeDefined());
    });

    test("should call onClick", () => {
      const handleClick = jest.fn();
      const { getByTestId } = render(
        <Menu
          MenuButtonProps={
            { "data-testid": "button", onClick: handleClick } as any
          }
        >
          {items.map((i) => (
            <a key={i}>{i}</a>
          ))}
        </Menu>
      );
      fireEvent.click(getByTestId("button"));
      expect(handleClick).toHaveBeenCalled();
    });

    test("should call onClose", () => {
      const handleClose = jest.fn();
      const { getByTestId, getByText } = render(
        <Menu
          onClose={handleClose}
          MenuButtonProps={{ "data-testid": "button" } as any}
        >
          {items.map((i) => (
            <a key={i}>{i}</a>
          ))}
        </Menu>
      );
      fireEvent.click(getByTestId("button"));
      fireEvent.focus(getByText(items[0]));
      fireEvent.keyDown(getByText(items[0]), { key: "Escape" });
      expect(handleClose).toHaveBeenCalled();
    });
  });
});
