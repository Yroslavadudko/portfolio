describe("My Test Message", () => {
  it("should visit the homepage", () => {
    cy.visit("https://mykoladudko.netlify.app"); // Замініть URL на ваш
  });

  it("should click a button and see the result", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="1"] > a').click();
    cy.get('[data-index="2"] > a').click();
    cy.get('[data-index="3"] > a').click();
    cy.get("#name").type('Mykola');
    cy.get("#email").type('dudko_78@ukr.net');
    cy.get("#msg").type('test');
    cy.get(".form-submit-btn").click();
    cy.get("#back-link").click();
  });
});
