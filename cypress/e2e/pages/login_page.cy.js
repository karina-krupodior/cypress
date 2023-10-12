export class LoginPage {
  username_texbox =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password_texbox =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  login_button = ".oxd-button";

  enterUsername(username) {
    cy.get(this.username_texbox).type(username);
  }

  enterPassword(password) {
    cy.get(this.password_texbox).type(password);
  }

  clickLogin() {
    cy.get(this.login_button).click();
  }
}
