import { render, fireEvent } from "../test-utils";
import { useKeyDown } from ".";

const Component = ({ onKeyDown, keys }: any) => {
  const handleKeyDown = useKeyDown(keys, onKeyDown);
  return <button onKeyDown={handleKeyDown}>button</button>;
};

describe("useKeyDown hook", () => {
  test("should callback with a single key", () => {
    const handleKeyDown = jest.fn();
    const { getByText } = render(
      <Component keys={["Escape"]} onKeyDown={handleKeyDown} />
    );
    fireEvent.keyDown(getByText("button"), { key: "Escape" });
    expect(handleKeyDown).toHaveBeenCalled();
  });

  test("should callback with multiple keys", () => {
    const handleKeyDown = jest.fn();
    const { getByText } = render(
      <Component keys={["Escape", "s", "d"]} onKeyDown={handleKeyDown} />
    );
    fireEvent.keyDown(getByText("button"), { key: "Escape" });
    fireEvent.keyDown(getByText("button"), { key: "s" });
    fireEvent.keyDown(getByText("button"), { key: "d" });
    expect(handleKeyDown).toHaveBeenCalledTimes(3);
  });

  test("should not callback", () => {
    const handleKeyDown = jest.fn();
    const { getByText } = render(
      <Component keys={["Escape", "s", "d"]} onKeyDown={handleKeyDown} />
    );
    fireEvent.keyDown(getByText("button"), { key: "a" });
    expect(handleKeyDown).not.toHaveBeenCalled();
  });
});
