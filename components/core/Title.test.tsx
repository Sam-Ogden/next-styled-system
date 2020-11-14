import { render } from "../../test-utils";
import { Title } from ".";

describe("Title component", () => {
  test("should render title", () => {
    const { getByText } = render(<Title>title</Title>);
    expect(getByText("title")).toBeDefined();
  });
});
