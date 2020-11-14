import { render } from "../../test-utils";
import { Link } from ".";

describe("Link component", () => {
  test("should render link", () => {
    const { getByText } = render(<Link href='#'>link</Link>);
    expect(getByText("link")).toBeDefined();
  });
});
