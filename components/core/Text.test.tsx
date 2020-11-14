import { render } from "../../test-utils";
import { Text } from ".";

describe("Text component", () => {
  test("should render text", () => {
    const { getByText } = render(<Text>text</Text>);
    expect(getByText("text")).toBeDefined();
  });
});
