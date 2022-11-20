// let BaseUrl = "http://localhost:2368/ghost/#/setup"; 
let Version = "V5"; let port = "2368";

// E1
describe("Go to Dashboard", () => {
  it('Given I navigate to page "http://localhost:"' + port + '"/ghost/#/setup"', () => {
    cy.visit("http://localhost:"+ port +"/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:"+port+"/ghost/#/signin") {
        cy.get("#ember6").type("email@email.com");
        cy.get("#ember8").type("p4ssw0rd..");
        cy.get("#ember10").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get("#ember21").click({ force: true, multiple: true });
    });
  });
  it("Then I expect to be in Dashboard", () => {
    cy.wait(2000);
    cy.url().then((url) => {
      expect(url).to.contain("http://localhost:2368/ghost/#/dashboard");
    });
  });

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./profile/" + Version + "E1_" + Date.now());
  })
});

//E2

describe("Go to Sites", () => {
  it('Given I navigate to page "http://localhost:"'+port+'"/ghost/#/setup"', () => {
    cy.visit("http://localhost:"+port+"/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:"+port+"/ghost/#/signin") {
        cy.get("#ember6").type("email@email.com");
        cy.get("#ember8").type("p4ssw0rd..");
        cy.get("#ember10").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get("#ember23").click({ force: true, multiple: true });
    });
  });

    it("Then I expect to be in Sites", () => {
      cy.wait(2000);
      cy.url().then((url) => {
        expect(url).to.contain("http://localhost:2368/ghost/#/site");
      });
    });
  
  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./profile/" + Version + "E2_" + Date.now());
  });
});


// E3


describe("Go to Posts", () => {
  it('Given I navigate to page "http://localhost:"'+port+'"/ghost/#/setup"', () => {
    cy.visit("http://localhost:"+port+"/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:"+port+"/ghost/#/signin") {
        cy.get("#ember6").type("email@email.com");
        cy.get("#ember8").type("p4ssw0rd..");
        cy.get("#ember10").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get("#ember23").click({ force: true, multiple: true });
    });

  });
    it("Then I expect to be in Posts", () => {
      cy.wait(2000);
      cy.url().then((url) => {
        expect(url).to.contain("http://localhost:2368/ghost/#/site");
      });
    });
  
  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./profile/" + Version + "E3_" + Date.now());
  });
});



// E4

describe("Go to Posts", () => {
  it('Given I navigate to page "http://localhost:"'+port+'"/ghost/#/setup"', () => {
    cy.visit("http://localhost:"+port+"/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:"+port+"/ghost/#/signin") {
        cy.get("#ember6").type("email@email.com");
        cy.get("#ember8").type("p4ssw0rd..");
        cy.get("#ember10").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get("#ember23").click({ force: true, multiple: true });
    });

  });
    it("Then I expect to be in Posts", () => {
      cy.wait(2000);
      cy.url().then((url) => {
        expect(url).to.contain("http://localhost:2368/ghost/#/site");
      });
    });
  
  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./profile/" + Version + "E3_" + Date.now());
  });
});

// E5


describe("Go to Posts", () => {
  it('Given I navigate to page "http://localhost:"'+port+'"/ghost/#/setup"', () => {
    cy.visit("http://localhost:"+port+"/ghost/#/setup");
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });

  it('When I fill login with "email@email.com" and "p4ssw0rd.."', () => {
    cy.url().then((url) => {
      if (url == "http://localhost:"+port+"/ghost/#/signin") {
        cy.get("#ember6").type("email@email.com");
        cy.get("#ember8").type("p4ssw0rd..");
        cy.get("#ember10").click({ force: true });
      }
    });
  });
  it("And I wait for 5 seconds", () => {
    cy.wait(5000);
  });
  it("And I try to go to profile", () => {
    cy.url().then((url) => {
      cy.get("#ember23").click({ force: true, multiple: true });
    });

  });
    it("Then I expect to be in Posts", () => {
      cy.wait(2000);
      cy.url().then((url) => {
        expect(url).to.contain("http://localhost:2368/ghost/#/site");
      });
    });
  
  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./profile/" + Version + "E3_" + Date.now());
  });
});