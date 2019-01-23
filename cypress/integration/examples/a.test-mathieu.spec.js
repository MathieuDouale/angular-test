/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://google.fr');
  })

  it('type search', () => {
    cy.get('.gLFyf').type('mathieu douale');
    cy.get('.FPdoLc > center > [value="Google zoeken"]').click();
    cy.get('[href="http://www.mathieu-douale.com/"] > .LC20lb').click();
  })
})
