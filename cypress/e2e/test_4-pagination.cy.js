describe("My Test Pagination", () => {
  it("should visit the project page", () => {
    cy.visit("https://mykoladudko.netlify.app");
  });

  it("should click a button nextBtn and prevBtn", () => {
    cy.visit("https://mykoladudko.netlify.app");
    cy.get('[data-index="1"] > a').click();
    cy.get("#nextBtn").click();

    cy.get("#nextBtn").click();

    cy.get("#projectCard9 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard10 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard11 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard12 > picture > img.project-img").should("be.visible");

    cy.get("#prevBtn").click();

    cy.get("#projectCard5 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard6 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard7 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard8 > picture > img.project-img").should("be.visible");

    cy.get("#prevBtn").click();

    cy.get("#projectCard4 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard3 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard2 > picture > img.project-img").should("be.visible");
    cy.get("#projectCard1 > picture > img.project-img")
      .trigger("mouseover")
      .wait(1000);

    cy.get('[data-index="2"] > a').click();
    cy.wait(4000);
  });
});
