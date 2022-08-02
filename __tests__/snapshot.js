import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

it("renders Footer unchanged", () => {
	const { container } = render(<Footer />);
	expect(container).toMatchSnapshot();
});
