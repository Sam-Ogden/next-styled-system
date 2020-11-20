import { render } from "../../test-utils";
import { Stack } from ".";

describe("Stack component", () => {
  test("should render stack child margin top", () => {
    const { asFragment } = render(
      <Stack space={3}>
        <div>item1</div>
        <div>item2</div>
      </Stack>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
