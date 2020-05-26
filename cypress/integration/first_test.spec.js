describe("Heading text", () => {
  it("goes to profile for main page", () => {
    cy.visit("/");
    cy.get("h2").invoke("text").should("equal", "Profile");
  });

  it("shows dialogs when visit /dialogs", () => {
    cy.visit("dialogs");
    cy.get("h2").invoke("text").should("equal", "Dialogs");
  });

  it("shows Videos when visit /videos", () => {
    cy.visit("videos");
    cy.get("h2").invoke("text").should("equal", "Videos");
  });
});
