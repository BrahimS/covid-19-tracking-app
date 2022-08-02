import { render } from "@testing-library/react";
import Picker from "../../components/Picker";
import "@testing-library/jest-dom";

describe("Index", () => {
	it("renders a Two components: Picker and Cards", () => {
		render(<Picker />);
		expect(Picker).toBeTruthy();
	});
});
