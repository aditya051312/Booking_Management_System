describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('greets with Sign in', () => {
    cy.contains('h1', 'Sign in');
  });

  it('links to the sign up page', () => {
    cy.contains('No account? Sign up').should('have.attr', 'href', '/signup');
  });

  it('requires username', () => {
    cy.get('form').contains('Sign in').click();
    cy.get('.validation-error').should('contain', 'Username is required');
  });

  it('requires password', () => {
    cy.get('form').contains('Sign in').click();
    cy.get('.validation-error').should('contain', 'Password is required');
  });

  it('navigates to the dashboard on successful login', () => {
    cy.get('input[name=username]').type('student');
    cy.get('input[name=password]').type('password123');
    cy.get('form').contains('Sign in').click();
    cy.url().should('include', '/dashboard');
  });

  it('displays error message on failed login', () => {
    cy.get('input[name=username]').type('student');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('form').contains('Sign in').click();
    cy.get('.validation-error').should('contain', 'Invalid username or password');
  });
});
