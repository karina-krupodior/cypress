describe("API Tests", () => {
  Cypress.config("baseUrl", "https://reqres.in/api");
  it("GET 1 request to API endpoint", () => {
    // Отправляем GET-запрос к API
    cy.request("GET", "/users?page=2").then((response) => {
      // Проверяем, что статус ответа равен 200
      expect(response.status).to.equal(200);
      expect(response).to.have.property("status", 200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("page", 2);
      expect(response.body.data).to.have.length(6);
    });
  });

  it("GET 2 request to API endpoint", () => {
    cy.request("GET", "/users?page=2").as("users");
    cy.get("@users").should((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.status).to.equal(200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("page", 2);
      expect(response.body.data).to.have.length(6);
    });
  });

  it("GET 3 request to API endpoint", () => {
    cy.request({
      method: "GET",
      url: "/users?page=2",
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.status).to.equal(200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("page", 2);
      expect(response.body.data).to.have.length(6);
    });
  });

  it("POST request to API endpoin", () => {
    cy.request({
      method: "POST",
      url: "/users",
      body: {
        name: "Karina",
        job: "leader",
      },
    }).then((response) => {
      expect(response).to.have.property("status", 201);
      expect(response.status).to.equal(201);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("name", "Karina");
    });
  });

  it("POST request to API endpoin", () => {
    const requestBody = {
      name: "Karina",
      job: "leader",
    };

    cy.request({
      method: "POST",
      url: "/users",
      body: requestBody,
    }).then((response) => {
      expect(response).to.have.property("status", 201);
      expect(response.status).to.equal(201);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("name", "Karina");
    });
  });

  it("PUT request to API endpoin", () => {
    const requestBody = {
      name: "morpheus",
      job: "zion resident",
    };

    cy.request({
      method: "PUT",
      url: "users/2",
      body: requestBody,
    }).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.status).to.equal(200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("name", "morpheus");
    });
  });

  it("Delete request", () => {
    cy.request("DELETE", "/users/2").then((response) => {
      expect(response.status).to.be.equal(204);
    });
  });
});
