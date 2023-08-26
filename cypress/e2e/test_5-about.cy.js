describe("My Test Aboutpage", () => {
  it("should visit the Aboutpage", () => {
    cy.visit("https://mykoladudko.netlify.app");
  });

  it("should visit", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="2"] > a').click();

    cy.scrollTo("top"); 
    cy.scrollTo("bottom"); 

    cy.get(".timeline > :nth-child(7)").scrollIntoView().should("be.visible");

    cy.get(".download-cv-btn").scrollIntoView().should("be.visible");

  });
});
