describe("home test", () => {
  it("test images visible", () => {
    cy.visit("/checkout");
    cy.get("img").should("be.visible");
  });
});
