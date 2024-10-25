class LoginPage {
  visit() {
    cy.visit("/");
  }

  getUsernameField() {
    return cy.get("#txtUsername");
  }

  getPasswordField() {
    return cy.get("#txtPassword");
  }

  getLoginButton() {
    return cy.get("#btnLogin");
  }

  getErrorMessage() {
    return cy.get("#spanMessage");
  }

  enterUsername(username) {
    this.getUsernameField().type(username);
  }

  enterPassword(password) {
    this.getPasswordField().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }
}

export default LoginPage;
