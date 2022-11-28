import { faker } from '@faker-js/faker';

let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V5"; let port = "2368";
//let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V4"; let port = "2369";


// Escenario S41:
describe("S41. Recordar contraseña cuando no se proporciona el usuario y la contraseña", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });

  it("And I try to remember password", () => {
    cy.get("#ember9").click();
  });

  it('Then I expect to see "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  });
});

// EScenario S42:

describe('S42. Recordar contraseña sin email con una contraseña aleatoria de 2 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(2))
  })

  it('I try to login', () => {
    cy.get("#ember9").click();
  })

  it('Then I expect to see in signin "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// EScenario S43:

describe('S43. Recordar contraseña sin email con una contraseña aleatoria de 8 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(8))
  })

  it('I try to login', () => {
    cy.get('#ember9').click()
  })

  it('Then I expect to see in signin "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// EScenario S44:
describe('S44. Recordar contraseña sin email con una contraseña aleatoria de 20 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(20))
  })

  it('I try to login', () => {
    cy.get('#ember9').click()
  })

  it('Then I expect to see in signin "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// EScenario S45:
describe('S45. Recordar contraseña sin email con una contraseña aleatoria de 250 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(250))
  })

  it('I try to login', () => {
    cy.get('#ember9').click()
  })

  it('Then I expect to see in signin "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Escenario S46: 
describe('S46. Recordar contraseña con un email aleatorio sin formato email', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with', () => {
    cy.get('#ember6').type(faker.random.word())
  })

  it('I try to login', () => {
    cy.get('#ember9').click()
  })

  it('Then I expect to see in signin "We need your email address to reset your password!"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('We need your email address to reset your password!');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})


// Escenario S47 Usuario no Existente 
describe("S47. Intentar recuperar contraseña cuando el usuario no existe", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type(faker.internet.exampleEmail());
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

// Escenario S48 Email con caracteres especiales 

describe("S48. Intentar recuperar una contraseña con un email que tiene caracteres especiales", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type('####+++++++"·$$'+faker.internet.exampleEmail());
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

// Escenario S49 Muchos click en boton forgot con email invalido
describe("S49. Muchos click en boton forgot con email invalido", () => {
  it('Given I navigate to page '+ BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with email-faker', () => {
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
});

    // Escenario S50 Muchos click en boton forgot con email no existente con password incorrecto
    describe("S50. Presionar varios clic en el botó Forgot con un email que no está registrado.", () => {
      it('Given I navigate to page' + BaseUrl, () => {
        cy.visit(BaseUrl);
      });
      it('When I fill login with "emailNonExistent@email.com"', () => {
        cy.get("#ember6").type(faker.internet.exampleEmail());
        cy.get("#ember8").type(faker.internet.password());
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

// Escenario S51 Usuario no Existente y con caracteres emoji
describe("S51. Forgot failed with non-existent user and characters invalid", () => {
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

  // Escenario S52 Muchos click en boton forgot con email existente con datos correctos 
  describe("S52. Forgot failed with existent user", () => {
    it('Given I navigate to page' + BaseUrl, () => {
      cy.visit(BaseUrl);
    });
    it('When I fill login with email existent', () => {
      cy.get("#ember6").type('email@email.com');
      //cy.get("#password").type(faker.internet.password());
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


    // Escenario S53 Muchos click en boton SIG IN con email no existente Y password incorrecto 
    describe("S53. Forgot failed with existent user", () => {
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


    // Escenario S54 Muchos click en boton SIG IN con email no existente Y password incorrecto 
    describe("S54. Recordar una contraseña con un email más de 200 carateres largo.", () => {
      it('Given I navigate to page' + BaseUrl, () => {
        cy.visit(BaseUrl);
      });
      it('When I fill login with email existent', () => {
        cy.get("#ember6").type(faker.lorem.lines(5)+faker.internet.email());
        cy.get("#ember8").type(faker.internet.password());
      });
      it("And I try to remember password", () => {
        cy.get("#ember9").click();
      });
    
      it('Then I expect to see "We need your email address to reset your password!"', async () => {
        cy.get('.main-error').should(($elements) => {
          let text = $elements.text
          expect(text).to.match('We need your email address to reset your password!');
        });
      });
    });

        // Escenario S55 Muchos click en boton SIG IN con email no existente Y password incorrecto 
        describe("S55. colocanto un email desde la arroba", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get("#ember6").type('@gmail.com');
          });
          it("And I try to remember password", () => {
            cy.get("#ember9").click();
          });
        
          it('Then I expect to see "We need your email address to reset your password!"', async () => {
            cy.get('.main-error').should(($elements) => {
              let text = $elements.text
              expect(text).to.match('We need your email address to reset your password!');
            });
          });
        });

        // Escenario S56 Muchos click en boton SIG IN con email no existente Y password incorrecto 
        describe("S56. colocando usuario y contraseñas correctos", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get('#ember6').type('email@email.com')
            cy.get('#ember8').type('p4ssw0rd..')
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

        // Escenario S57 Muchos click en boton SIG IN con email no existente Y password incorrecto 
        describe("S57. Usando numeros alreatorios para el imail y contraseña de 20 digitios.", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get('#ember6').type(faker.datatype.number(20))
            cy.get('#ember8').type(faker.datatype.number(20))
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

        // Escenario S58 Muchos click en boton SIG IN con email no existente Y password incorrecto 
        describe("S58. usando dos cadenas de numeros para email y contraseña", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get('#ember6').type(faker.datatype.number(10))
            cy.get('#ember8').type(faker.datatype.number(10))
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

        // Escenario S59 Muchos click en boton SIG IN con email no existente Y password incorrecto 
        describe("S59. usando dos @@ en un mismo mail", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get('#ember6').type('@' + faker.datatype.number(20) +'@' + faker.datatype.number(20))
          });
          it("And I try to remember password", () => {
            cy.get("#ember9").click();
          });
        
          it('Then I expect to see "We need your email address to reset your password!"', async () => {
            cy.get('.main-error').should(($elements) => {
              let text = $elements.text
              expect(text).to.match('We need your email address to reset your password!');
            });
          });
        });

        // Escenario S60 
        describe("S60. colocando @nombre@mail@campo", () => {
          it('Given I navigate to page' + BaseUrl, () => {
            cy.visit(BaseUrl);
          });
          it('When I fill login with email existent', () => {
            cy.get('#ember6').type('@' + faker.datatype.number(20) +'@' + faker.datatype.number(20) + '@' +faker.datatype.number(20))
          });
          it("And I try to remember password", () => {
            cy.get("#ember9").click();
          });
        
          it('Then I expect to see "We need your email address to reset your password!"', async () => {
            cy.get('.main-error').should(($elements) => {
              let text = $elements.text
              expect(text).to.match('We need your email address to reset your password!');
            });
          });
        });
        