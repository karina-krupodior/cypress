it("Search Google", () => {
  cy.visit("https://google.com");
  cy.get("#APjFqb").type("pictures{Enter}");
//   cy.contains("Google Search").click();
});
