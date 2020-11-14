import { render } from "../../test-utils";
import { Box } from ".";

describe("Box component", () => {
  test("should render box", () => {
    const { getByText } = render(<Box>box</Box>);
    expect(getByText("box")).toBeDefined();
  });
});
