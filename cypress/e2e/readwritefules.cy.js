before(function () {
  cy.fixture("example.json").as("test_date");
});

it("Read file using Fixture", function () {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });
  cy.log(this.test_date.name);
});

it("Read file using Read file", function () {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
  });
});

it("Write file demo", function () {
  cy.writeFile("sampleFile.txt", "Hi\n");
  cy.writeFile("sampleFile.txt", "What is your name ?", { flag: "a+" });
});
