import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/Footer";

test("Render footer", () => {
	render(<Footer />);
	expect(Footer).toBeTruthy();
});
