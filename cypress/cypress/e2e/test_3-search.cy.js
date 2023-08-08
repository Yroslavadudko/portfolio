describe("My Test Search", () => {
  it("should visit the contact page", () => {
    cy.visit("https://mykoladudko.netlify.app"); // Замініть URL на ваш
  });

  it("should click a search Google map", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="3"] > a').click();
    cy.get(".map").click();
    
  });
});
