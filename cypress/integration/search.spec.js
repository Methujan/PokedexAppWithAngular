// search.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("PokeAPI Tests", () => {
  it("search for Mew", () => {
    cy.visit("http://localhost:4200/");
    cy.get('[data-cy="search"]').type("mew");
    cy.get('[data-cy="search-btn"]').click();
    cy.get(".pokemonName").contains("mew");
    cy.get(".pokemonType").contains("psychic");
  });
});
