describe('Test-Login TechTalk', () => {
  it('Test-Login Correctly', () => {
    // get to the login page
    cy.visit('/login')
    // fill the fields
    cy.fixture('./data.json').then((user) => {
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.pass)
    })
    // click the button
    cy.get('form').submit()
    // validation
    cy.url('').should('eq','http://localhost:3000/')
  })

  it('Test-Login Incorrectly(Password)', () => {
    // get to the login page
    cy.visit('/login')
    // fill the fields
    cy.fixture('./data.json').then((user) => {
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.bad_pass)
    })
    // click the button
    cy.get('form').submit()
    // validation
    cy.get('div.go3958317564').should('contain','invalid credential')
  })
    
  it('Test-Login Incorrectly(Email)', () => {
    // get to the login page
    cy.visit('/login')
    // fill the fields
    cy.fixture('./data.json').then((user) => {
      cy.get('#email').type(user.bad_email)
      cy.get('#password').type(user.pass)
    })
    // click the button
    cy.get('form').submit()
    // validation
    cy.get('div.go3958317564').should('contain','user not found')
  })

  it('Test-ForgotPass_Link', () => {
    // get to the login page
    cy.visit('/login')
    // click the Forgot Password link
    cy.contains('Forgot password').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/forgot-password')
  })

  it('Test-Registration_Link', () => {
    // get to the login page
    cy.visit('/login')
    cy.contains('Sign up').click()
    //validation
    cy.url('').should('eq','http://localhost:3000/signup')
  })
})