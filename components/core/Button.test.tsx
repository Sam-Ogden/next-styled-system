import { render, fireEvent } from "../../test-utils";
import { Button } from ".";

describe("Button component", () => {
  test("should render button", () => {
    const { getByText } = render(<Button>button</Button>);
    expect(getByText("button")).toBeDefined();
  });

  test("should call onClick callback", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>button</Button>);
    fireEvent.click(getByText("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
