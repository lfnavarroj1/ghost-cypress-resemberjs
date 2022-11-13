describe("Log in to dashboard", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });

  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("title");
        cy.get("#name").type("name");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });

  it("Then I expect to be logged in", () => {
    cy.wait(5000);
    cy.url().then((url) => {
      expect(url).to.equal("http://localhost:2368/ghost/#/dashboard");
    });
  });
});

describe("Log out of dashboard", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/setup"', () => {
    cy.visit("http://localhost:2368/ghost/#/setup");
  });

  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill register with "title" and "name" and "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/setup") {
        cy.get("#blog-title").type("title");
        cy.get("#name").type("name");
        cy.get("#email").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.wait(5000);
        cy.get("#ember8").click({ force: true });
      }
    });
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:2368/ghost/#/signin") {
        cy.get("#identification").type("email@email.com");
        cy.get("#password").type("p4ssw0rd..");
        cy.get("#ember7").click({ force: true });
      }
    });
  });

  it("And you click on to user options", () => {
    cy.get("#ember36").click({ force: true });
    cy.wait(1000);
  });

  it("And you click on to log out", () => {
    cy.get("#ember60").click({ force: true });
  });

  it("Then I expect to be logged out", () => {
    cy.wait(5000);
    cy.url().then((url) => {
      expect(url).to.equal("http://localhost:2368/ghost/#/signin");
    });
  });
});
