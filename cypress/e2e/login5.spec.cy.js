import { faker } from '@faker-js/faker';
let Version = "V5"; let BaseUrl = "http://localhost:2368/ghost/#/setup"


// Escenario S21:
describe('S21. Ingresando al sistema sin usuarios y contraseña', () => {
  it('Given I navigate to page "' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E1");
  })

})

// Scenario S22:

describe('S22. Intentando ingresar sin email con una contraseña aleatoria de 2 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(2))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S23:

describe('S23. Intentando ingresar sin email con una contraseña aleatoria de 8 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(8))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S24:
describe('S24. Intentando ingresar sin email con una contraseña aleatoria de 20 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(20))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S25:
describe('S25. Intentando ingresar sin email con una contraseña aleatoria de 10 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(10))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S26:
describe('S26. Intentando ingresar sin email con una contraseña aleatoria de 200 caracteres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type(faker.internet.password(200))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S27:
describe('S27. Intentando ingresar sin email y con una contraseña existente', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password', () => {
    cy.get('#ember8').type('p4ssw0rd..')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})

// Scenario S28: 
describe('S28. Iniciando con un email aleatorio sin contraseña y formato email', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with', () => {
    cy.get('#ember6').type(faker.random.word())
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S29: 
describe('S29. Iniciando con un email aleatorio sin contraseña', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with email', () => {
    cy.get('#ember6').type(faker.internet.exampleEmail())
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S30: 
describe('S30. Iniciando con un email y contrasena correctas', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celis@uniandes.edu.com"', () => {
    cy.get('#ember6').type('email@email.com')
    cy.get('#ember8').type('p4ssw0rd..')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it("Then I expect to be in my profile", () => {
    cy.wait(5000);
    cy.url().then((url) => {
      expect(url).to.contain("http://localhost:2368/ghost/#/dashboard");
    });
  });

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})


// Scenario S31: 
describe('S31. Iniciando con un email aleatorio y contrasena aleatoria de 50 carateres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with fake-email', () => {
    cy.get('#ember6').type(faker.internet.exampleEmail())
    cy.get('#ember8').type(faker.internet.password(50))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "There is no user with that email address"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S32: 
describe('S32. Iniciando con un email aleatorio de  y contrasena aleatoria de 10 carateres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with fake-email', () => {
    cy.get('#ember6').type(faker.internet.exampleEmail())
    cy.get('#ember8').type(faker.internet.password(10))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S33: 
describe('S33. Iniciando con un email aleatorio de  y contrasena aleatoria de 200 carateres', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with fake-email', () => {
    cy.get('#ember6').type(faker.internet.exampleEmail())
    cy.get('#ember8').type(faker.internet.password(200))
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S34: 
describe('S34. Iniciando con un email aleatorio y contrasena aleatoria', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with', () => {
    cy.get('#ember6').type(faker.internet.exampleEmail())
    cy.get('#ember8').type(faker.internet.password())
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})



// Scenario S35: 
describe('S35. Intentar de ingresar más de 10 veces con solo el correo', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "email@email.com"', () => {
    cy.get('#ember6').type('email@email.com')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})


// Scenario S36: 
describe('S36. Intentar de ingresar más de 10 veces con el correo valido y una clave errada', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celis@uniandes.edu.com"', () => {
    cy.get('#ember6').type('email@email.com')
    cy.get('#ember8').type(faker.internet.password())
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Too many login attempts."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Too many login attempts.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario S37: 
describe('S37. Intentar de ingresar más de 10 veces sin correo y contraseña', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Escenario S38 Email con caracteres especiales 
describe("S38. ingrear con una con un email que tiene caracteres especiales y contraseña aleatoria", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "####+++++++"·$$@%$#%$%&$%.com"', () => {
    cy.get("#ember6").type('####+++++++"·$$@%$#%$%&$%.com');
    cy.get("#ember8").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember10").click();
  });

  it('Then I expect to see "Please fill out the form to sign in. "', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  });
});


// Escenario S39 Email con caracteres especiales 

describe("S39. ingrear con una con un email que tiene emoji y contraseña aleatoria", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "emailNonExistent@email.com"', () => {
    cy.get("#ember6").type(faker.internet.emoji() + faker.internet.emoji() + faker.name.firstName());
    cy.get("#ember8").type(faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember10").click();
  });

  it('Then I expect to see "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  });
});

// Escenario S40

describe("S40. ingrear con una con un email registrado y contraseña con emoji", () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl);
  });
  it('When I fill login with "email@email.com"', () => {
    cy.get("#ember6").type('email@email.com');
    cy.get("#ember8").type(faker.internet.emoji()+faker.internet.emoji()+faker.internet.password());
  });
  it("And I try to remember password", () => {
    cy.get("#ember10").click();
  });

  it('Then I expect to see "Your password is incorrect"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Your password is incorrect');
    });
  });
});








