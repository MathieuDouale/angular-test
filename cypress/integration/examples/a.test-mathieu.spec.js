/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://google.fr');
  })

  it('type search', () => {
    cy.get('.gLFyf').type('mathieu douale');
    cy.get('.FPdoLc > center > [value="Google zoeken"]').click();
    cy.get('#hdtb-msb-vis > :nth-child(2) > .q').click();
    cy.get('[data-ri="1"] > .iKjWAf > .FnqxG').click();
  })
})
