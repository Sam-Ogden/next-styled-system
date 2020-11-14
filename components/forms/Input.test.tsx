import { render, fireEvent } from "../../test-utils";
import { Input } from ".";

describe("Input component", () => {
  test("should render input", () => {
    const { getByLabelText } = render(<Input aria-label='input' />);
    expect(getByLabelText("input")).toBeDefined();
  });

  test("should call onChange callback", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Input onChange={handleChange} aria-label='input' />
    );
    fireEvent.change(getByLabelText("input"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
