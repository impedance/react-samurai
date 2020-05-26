describe("Walking through navigation", () => {
  it("goes to main page - profile", () => {
    cy.visit("/");
    cy.location("pathname").should("include", "/");
  });

  it("goes to Messages", () => {
    cy.get("nav").contains("Messages").click();
    cy.location("pathname").should("include", "dialogs");
  });

  it("goes to friends", () => {
    cy.get("nav").contains("Friends").click();
    cy.location("pathname").should("include", "/friends");
  });
});
