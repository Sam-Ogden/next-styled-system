import { render, fireEvent } from "../test-utils";
import { useToggle } from ".";

const Component = () => {
  const [on, toggle] = useToggle(true);
  return (
    <>
      <button onClick={toggle}>toggle</button>
      <span>{on ? "on" : "off"}</span>
    </>
  );
};

describe("useToggle hook", () => {
  test("should use default value", () => {
    const { getByText } = render(<Component />);
    expect(getByText("on")).toBeDefined();
  });

  test("should toggle", () => {
    const { getByText } = render(<Component />);
    fireEvent.click(getByText("toggle"));
    expect(getByText("off")).toBeDefined();
  });
});
