/// <reference types="cypress-downloadfile"/>

it("File upload demo", function () {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("test2.png");
});

it("File download test", function () {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
