describe("My Test Search", () => {
  it("should visit the contact page", () => {
    cy.visit("https://mykoladudko.netlify.app"); // Замініть URL на ваш
  });

  it("should click a search Google map", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="3"] > a').click();
    cy.get(".contact-list > :nth-child(1)");
    cy.get(".contact-list > :nth-child(2)");
    cy.get(".contact-list > :nth-child(3)");
    cy.get(".contact-list > :nth-child(4)");
    cy.get(".contact-list > :nth-child(5)");
    cy.get(".contact-list > :nth-child(6)");
  });
});
