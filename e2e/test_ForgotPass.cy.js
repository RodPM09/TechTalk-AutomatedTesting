describe('Test-Forgot_Password TechTalk', () => {
  it('Test-ForgotPass Correctly', () => {
    // get to the login page
    cy.visit('/login')
    // click the Forgot Password link
    cy.contains('Forgot password').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/forgot-password')
    // fill the field
    cy.fixture('./data.json').then((user)=>{
      cy.get('#email').type(user.email)
    })
    // click the button
    cy.get('button').dblclick()
    // validation
    cy.url('').should('eq','http://localhost:3000/email')
  })

  it('Test-ForgotPass Incorrectly', () => {
    // get to the login page
    cy.visit('/login')
    // click the Forgot Password link
    cy.contains('Forgot password').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/forgot-password')
    // click the button
    cy.get('button').dblclick()
    // validation
    cy.get('div.go3958317564').should('contain','Your email is not registered with us')
  })

  it('Test-Registration_Link', () => {
    // get to the login page
    cy.visit('/login')
    // click the Forgot Password link
    cy.contains('Forgot password').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/forgot-password')
    // click the Create Account link
    cy.contains('Create an Account!').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/signup')
  })

  it('Test-Login_Link', () => {
    // get to the login page
    cy.visit('/login')
    // click the Forgot Password link
    cy.contains('Forgot password').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/forgot-password')
    // click the Login link
    cy.contains('Already have an account? Login!').click()
    // validation
    cy.url('').should('eq','http://localhost:3000/login')
  })
})