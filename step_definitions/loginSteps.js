import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("the user is on the login page", () => {
  loginPage.visit();
});

When("the user enters valid username and password", () => {
  loginPage.enterUsername("Admin");
  loginPage.enterPassword("admin123");
});

When("the user enters invalid username and password", () => {
  loginPage.enterUsername("invalidUser");
  loginPage.enterPassword("invalidPass");
});

When("the user clicks the login button", () => {
  loginPage.clickLogin();
});

Then("the user should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("an error message should be displayed", () => {
  loginPage.getErrorMessage().should("be.visible");
});
