import { render } from "../../test-utils";
import { Scrim } from ".";

describe("Scrim component", () => {
  test("should render scrim", () => {
    const { getByText } = render(<Scrim>scrim</Scrim>);
    expect(getByText("scrim")).toBeDefined();
  });
});
