import { faker } from '@faker-js/faker';

let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V5";
//let BaseUrl = "http://localhost:2369/ghost/#/setup"; let Version = "V4"; 

// Escenario 1 Sin Datos
describe('Register failed with wrong email', () => {
  it('Given I navigate to page' + BaseUrl , () => {
    cy.visit(BaseUrl)
  })

  it('When I fill cretate account with incorrect email.', () => {
    cy.get('#blog-title').type(' ')  
    cy.get('#name').type(' ')
    cy.get('#email').type(' ')
    cy.get('#password').type(' ')
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Invali Email."', async () => {

    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Invalid Email.');
    });
  })
})

// Escenario 2 Mail Invalido - Aleatorio
describe('Register failed with wrong email', () => 
{
  it('Given I navigate to page' + BaseUrl , () => {
    cy.visit(BaseUrl)
  })

  it('When I fill cretate account with incorrect email.', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.random.word())
    cy.get('#password').type(faker.internet.password())
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Invali Email."', async () => {

    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Invalid Email.');
    });
  })
})


// Escenario 3 Passwor muy corto
describe('Register failed with short password', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with short password.', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(5))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Password must be at least 10 characters long."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Password must be at least 10 characters long.');
    });
  })
})

// Escenario 4 Password Inseguro
describe('Register failed with insecure password', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with short password.', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type('11111111111')
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Sorry, you cannot use an insecure password."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Sorry, you cannot use an insecure password.');
    });
  })
})



// Escenario 5 Hacer registro sin el campo Tittle
describe('Register failed without tittle', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create accountwithout tittle', () => {
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a site title."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a site title.');
    });
  })

})



// Escenario 6 Hacer registro sin el campo name
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    //cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 7 Hacer registro sin el campo email
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    //cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 8 Hacer registro sin el campo paswword
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    //cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a password."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a password.');
    });
  })
})

// Escenario 9 - Nombre extenso 300 caracteres
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with large name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.lorem.lines() + faker.lorem.lines() + faker.lorem.lines() + faker.lorem.lines())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(5))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 10 - Nombre extenso > 191 caracteres.
describe('Register failed with large name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with large name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.lorem.lines() + faker.lorem.lines() + faker.lorem.lines())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Value in [users.name] exceeds maximum length of 191 characters. users.name"', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Value in [users.name] exceeds maximum length of 191 characters. users.name ');
    });
  })
})



// Escenario 11 - Email extenso 300 caracteres
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with large name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.lorem.lines() + faker.lorem.lines() + faker.lorem.lines() + faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})



// CASOS QUE CREAN CUENTA
// Escenario 12 - Email Caracteres especiales.
describe('Register without special characters a email', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with large name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type('#$#%#%$#%&#%#' + faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})



// Escenario 13 - Nombre con Caracteres Especiales
describe('Register with name and special characters', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type('#$#%#%$#%&#%#)()(/"(/"$)(/"$)"(/$)(""' + faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 14 - Nombre con Caracteres Emoji
describe('Register with name and special characters', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName() + faker.internet.emoji() + faker.internet.emoji())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 15 - Tittle con Caracteres Especiales
describe('Register with name and special characters', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type('#$#%#%$#%&#%#)()(/"(/"$)(/"$)"(/$)(""' + faker.lorem.lines(1))  
    cy.get('#name').type('' + faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})

// Escenario 16 - Tittle con Caracteres Emoji
describe('Register with name and special characters', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.internet.emoji() + faker.lorem.lines(1))  
    cy.get('#name').type('' + faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})


// Escenario 17 - Email con emoji ok -- Pass
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail() + faker.internet.emoji() + faker.internet.emoji())
    //cy.get('#password').type(faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})


// Escenario 18 - Password con emoji ok -- Pass
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type(faker.internet.password(15) + faker.internet.emoji() + faker.internet.emoji())
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})


// Escenario 19 - Password con cacteres especiales ok -- Pass
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type(faker.lorem.lines(1))  
    cy.get('#name').type(faker.name.firstName())
    cy.get('#email').type(faker.internet.exampleEmail())
    cy.get('#password').type('#$#%#%$#%&#%#)()(/"(/"$)(/"$)"(/$)(""++++' + faker.internet.password(15))
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Please enter a name."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please enter a name.');
    });
  })
})


// Escenario 20 Hacer registro satisfactorio
describe('Register Successfull', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with Register Successfull', () => {
    cy.get('#blog-title').type('title')
    cy.get('#name').type('name')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('p4ssw0rd..')
  })

  it('I try to create account', () => {
    cy.get('#ember8').click()
  })

  it('Then I expect to see "Then I expect to be create in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Then I expect to be create in');
    });
  })
  
})
