describe("My Test Message", () => {
  it("should visit the contactpage", () => {
    cy.visit("https://mykoladudko.netlify.app");
  });

  it("should click a button and see the result", () => {
    cy.visit("https://mykoladudko.netlify.app");

    cy.get(".active > a").click();

    cy.get('[data-index="2"] > a').click();

    cy.get('[data-index="3"] > a').click();
    // cy.get("#name").should("have.text", "Name");
    // cy.get("#email").should("have.text", "email");
    // cy.get("msg").should("have.text", "message");

    cy.get("#name").type("Mykola");
    cy.get("#email").type("dudko_78@ukr.net");
    cy.get("#msg").type("test");

    cy.get(".form-submit-btn").click();
    // cy.get(".form-submit-btn").should("have.text", "Contact");
    // cy.get(".form-submit-btn").should(
    //   "have.css",
    //   "background",
    //   "var(--contact-form-btn-color))"
    // );

    cy.get("#back-link").click();


  });
});
