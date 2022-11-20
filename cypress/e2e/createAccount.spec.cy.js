

//let BaseUrl = "http://localhost:2368/ghost/#/setup"; let Version = "V5";
let BaseUrl = "http://localhost:2369/ghost/#/setup"; let Version = "V4"; 


// Escenario 1 Mail Invalido
describe('Register failed with wrong email', () => {
  it('Given I navigate to page' + BaseUrl , () => {
    cy.visit(BaseUrl)
  })

  it('When I fill cretate account with incorrect email.', () => {
    cy.get('#blog-title').type('Blog Tittle')
    cy.get('#name').type('Name')
    cy.get('#email').type('emailIncorrect')
    cy.get('#password').type('Crrr$qqqqq321')
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

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./createAccount/" + Version + "E1_" + Date.now());
  })

})


// Escenario 2 Passwor muy corto
describe('Register failed with short password', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account with short password.', () => {
    cy.get('#blog-title').type('Blog Tittle')
    cy.get('#name').type('Name')
    cy.get('#email').type('email@correcto.com')
    cy.get('#password').type('Crr123')
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

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./createAccount/" + Version + "E2_" + Date.now());
  })

})


// Escenario 3 Hacer registro sin el campo Tittle
describe('Register failed without tittle', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create accountwithout tittle', () => {
    // cy.get('#blog-title').type('Blog Tittle')
    cy.get('#name').type('Name')
    cy.get('#email').type('email@correcto.com')
    cy.get('#password').type('Rrrr$qqqqq321')
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

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./createAccount/" + Version + "E3_" + Date.now());
  })
})

// Escenario 4 Hacer registro sin el campo name
describe('Register failed without name', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill create account without name', () => {
    cy.get('#blog-title').type('Blog Tittle')
    //cy.get('#name').type('Name')
    cy.get('#email').type('email@correcto.com')
    cy.get('#password').type('Rrrr$qqqqq321')
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

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./createAccount/" + Version + "E4_" + Date.now());
  })
})

// Escenario 5 Hacer registro satisfactorio
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

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./createAccount/" + Version +"E5_" + Date.now());
  })
})