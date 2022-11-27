import { faker } from '@faker-js/faker';

let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V5"; let port = "2368";
//let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V4"; let port = "2369";

// Escenario 21 Usuario no Existente 
describe("Forgot failed with non-existent user", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type(faker.internet.exampleEmail());
    //cy.get("#password").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });

  it('Then I expect to see "User not found."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('User not found.');
    });
  });
});


// Escenario 22 Sin datos
describe("Forgot failed without email", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "" and ""', () => {
    cy.get("#ember6").clear();
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });
  it('Then I expect to see "We need your email address to reset your password!."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!.');
    });
  });
});

// Escenario 23 mail con formato incorrecto
describe("Forgot failed with invalid email format", () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent" and ""', () => {
    cy.get("#ember6").type(faker.name.firstName());
    cy.get("#ember8").clear();
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });
  it('Then I expect to see "We need your email address to reset your password!"', () => {
    cy.get(".main-error").then(($elements) => {
      let text = $elements.text();
      expect(text).to.contains(
        "We need your email address to reset your password!"
      );
    });
  });

  // it('I try to capture snapshot', () => {
  //   cy.wait(2000);
  //   cy.screenshot("./forgot/" +  Version + "E3_" + Date.now());
  // })
});

// Escenario 24 Email con caracteres especiales 
describe("Forgot failed with non-existent user and characters invalid", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type('####+++++++"·$$'+faker.internet.exampleEmail());
    //cy.get("#password").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });

  it('Then I expect to see "User not found."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('User not found.');
    });
  });
});

// Escenario 25 Usuario no Existente y con caracteres emoji
describe("Forgot failed with non-existent user and characters invalid", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type(faker.internet.emoji() + faker.internet.emoji() + faker.internet.exampleEmail());
    //cy.get("#password").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });

  it('Then I expect to see "We need your email address to reset your password! "', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password! ');
    });
  });
});


// Escenario 26 Muchos click en boton forgot con email invalido
describe("Forgot failed with non-existent user many times", () => {
  it('Given I navigate to page '+ BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com" and ""', () => {
    cy.get("#ember6").type(faker.internet.emoji() + faker.internet.emoji() + faker.name.firstName());
    cy.get("#ember8").clear();
  });
  it("And I try to remember password 5 times", () => {
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
  });
  it('Then I expect to see "We need your email address to reset your password! "', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password! ');
    });
  });

    // Escenario 27 Muchos click en boton forgot con email no existente con password incorrecto
    describe("Forgot failed with non-existent user and characters invalid", () => {
      it('Given I navigate to page' + BaseUrl, () => {
        cy.visit(BaseUrl);
      });
      it('When I fill login with "emailNonExistent@email.com"', () => {
        cy.get("#ember6").type(faker.internet.exampleEmail());
        cy.get("#password").type(faker.internet.password());
      });
      it("And I try to remember password", () => {
        cy.get("#ember9").click();
      });
    
      it('Then I expect to see "Too many attempts try again in an hour"', async () => {
        cy.get('.main-error').should(($elements) => {
          let text = $elements.text
          expect(text).to.match('Too many attempts try again in an hour');
        });
      });
    });


// Escenario 28 Muchos click en boton forgot con email no existente
describe("Forgot failed with non-existent user and characters invalid", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type(faker.internet.exampleEmail());
    //cy.get("#password").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
    cy.get("#ember9").click();
  });

  it('Then I expect to see "Too many attempts try again in an hour"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Too many attempts try again in an hour');
    });
  });
});


  // Escenario 29 Muchos click en boton forgot con email existente con datos correctos 
  describe("Forgot failed with existent user", () => {
    it('Given I navigate to page' + BaseUrl, () => {
      cy.visit(BaseUrl);
    });
    it('When I fill login with email existent', () => {
      cy.get("#ember6").type('mail@mail.com');
      cy.get("#password").type(faker.internet.password());
    });
    it("And I try to remember password", () => {
      cy.get("#ember9").click();
    });
  
    it('Then I expect to see "Failed to send email. Reason: Sending failed"', async () => {
      cy.get('.main-error').should(($elements) => {
        let text = $elements.text
        expect(text).to.match('Failed to send email. Reason: Sending failed');
      });
    });
  });


    // Escenario 30 Muchos click en boton SIG IN con email no existente Y password incorrecto 
    describe("Forgot failed with existent user", () => {
      it('Given I navigate to page' + BaseUrl, () => {
        cy.visit(BaseUrl);
      });
      it('When I fill login with email existent', () => {
        cy.get("#ember6").type('mail@mail.com');
        cy.get("#ember8").type(faker.internet.password());
      });
      it("And I try to remember password", () => {
        cy.get("#ember10").click();
      });
    
      it('Then I expect to see "There is no user with that email address. "', async () => {
        cy.get('.main-error').should(($elements) => {
          let text = $elements.text
          expect(text).to.match('There is no user with that email address. ');
        });
      });
    });
  
  // it('I try to capture snapshot', () => {
  //   cy.wait(2000);
  //   cy.screenshot("./forgot/" + Version + "E4_" + Date.now());
  // })
});


