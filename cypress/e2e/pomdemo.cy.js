import { LoginPage } from "./pages/login_page.cy";
const loginPage = new LoginPage();
beforeEach(function () {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
describe("All Login Test", () => {
  it("Login test 1", function () {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-brand-banner > img");

    //   cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    //     "Admin"
    //   );

    //   cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    //     "admin123"
    //   );
    //   cy.get(".oxd-button").click();
  });

  it("Login test 2", function () {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-brand-banner > img");

    //   cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    //     "Admin"
    //   );

    //   cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    //     "admin123"
    //   );
    //   cy.get(".oxd-button").click();
  });
});

it("Login test 3", function () {
  loginPage.enterUsername("Admin");
  loginPage.enterPassword("admin567");
  loginPage.clickLogin();
  cy.get(".oxd-brand-banner > img");

  //   cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //     "Admin"
  //   );

  //   cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //     "admin123"
  //   );
  //   cy.get(".oxd-button").click();
});
