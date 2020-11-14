import { render } from "../../test-utils";
import { AppHeader } from ".";

const links = ["link-1", "link-2"];
const Logo = () => <p>custom-logo</p>;
const Links = ({ mobile, ...rest }: any) => (
  <>
    {mobile && <a {...rest}>mobile-menu</a>}
    {links.map((item) => (
      <a key={item} {...rest}>
        {item}
      </a>
    ))}
  </>
);

const props = { Links, Logo };
describe("AppHeader component", () => {
  test("should render logo and links", () => {
    const { getByText } = render(<AppHeader {...props} />);
    expect(getByText("custom-logo")).toBeDefined();
    links.forEach((item) => expect(getByText(item)).toBeDefined());
  });
});
