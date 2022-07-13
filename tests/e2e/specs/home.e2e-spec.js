describe("home test", () => {
  it("test images visible", () => {
    cy.visit("/");
    cy.get("img").should("be.visible");
  });
});
