describe("My Test Homepage", () => {
  it("should visit the homepage", () => {
    cy.visit("https://mykoladudko.netlify.app");
  });

  it("should visit", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="1"] > a').click();
    cy.get('[data-index="2"] > a').click();
    cy.get('[data-index="3"] > a').click();
     cy.get('[data-index="0"] > a').click();
  });
});
