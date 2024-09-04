describe('Test-Sign_Up TechTalk', () => {
  
  it('Test-Sign Up Correctly', () => {
    // get to the login page
    cy.visit('/login')
    // click the Sign Up Link
    cy.contains('Sign up').click()
    //validation
    cy.url('').should('eq','http://localhost:3000/signup')
    // data_generators
    const random_username = Math.random().toString(36).substring(2,15)
    const random_email = Math.random().toString(36).substring(2,15) + '@gmail.com'
    const random_pass = Math.random().toString(36).substring(2,15)
    // fild the fields
    cy.get('#username').type(random_username)
    cy.get('#email').type(random_email)
    cy.get('#password').type(random_pass)
    //click the button
    cy.get('form').submit()
    //validation
    cy.get('div.go3958317564').should('contain','Account creation successful, now log in!')
  })

  it('Test-Sign Up Incorrectly (Username field left empty)', () => {
    // get to the login page
    cy.visit('/login')
    // click the Sign Up Link
    cy.contains('Sign up').click()
    //validation
    cy.url('').should('eq','http://localhost:3000/signup')
    // data_generators
    const random_email = Math.random().toString(36).substring(2,15) + '@gmail.com'
    const random_pass = Math.random().toString(36).substring(2,15)
    // fild the fields
    cy.get('#email').type(random_email)
    cy.get('#password').type(random_pass)
    //click the button
    cy.get('form').submit()
    //validation
    cy.get('div.go3958317564').should('contain','Error: The username already exists')
  })

  it('Test-Login_Link', () => {
    // get to the login page
    cy.visit('/login')
    // get to the Sign Up page
    cy.contains('Sign up').click()
    // click the Login link
    cy.contains('Login here').click()
    //validation
    cy.url('').should('eq','http://localhost:3000/login')
  })
})