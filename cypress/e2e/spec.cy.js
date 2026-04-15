describe('Hello World App', () => {
  it('displays Hello World!', () => {
    cy.visit('/');
    cy.contains('Hello World!');
  });

  it('has correct background color', () => {
    cy.visit('/');
    cy.get('body').should('have.css', 'background-color', 'rgb(140, 29, 192)'); // lightblue
  });

  it('loads the page', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
});