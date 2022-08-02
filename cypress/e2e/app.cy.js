describe("Stats Page", () => {
	it("should navigate to the Stats page", () => {
		// Start from the index page
		cy.visit("http://localhost:3000/");

		// Find a link with an href attribute containing "Stats" and click it
		cy.get("#stats").click();

		// The new page should contain an h1 with "About page"
		cy.get("form.picker_flex").contains("Choose a Country");
	});
});

describe("About Page", () => {
	it("should navigate to the about page", () => {
		// Start from the index page
		cy.visit("http://localhost:3000/");

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[href*="about"]').click();

		// The new url should include "/about"
		cy.url().should("include", "/about");

		// The new page should contain an h1 with "About page"
		cy.get("h1").contains("Covid");
	});
});
