describe('Test-User Post-Actions TechTalk', () => {
    it('Test-User Post-Comments', () => {
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
      // get to the post page
      cy.contains('Probando').click()
      // fill the comment field
      cy.get('#commentText').type('Probando comentario usuario')
      // click the send comment button
      cy.get('form').submit()
    })

    it('Test-User Edit-Post-Comments', () => {
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
        // get to the post page
        cy.contains('Probando').click()
        // click the edit comment button
        cy.get(':nth-child(3) > .comentario-info > .text-sm > .isolate > .mx-1').click()
        // edit the comment
        cy.get(':nth-child(3) > .px-3').type(' (editando comentario)')
        // validate the edit
        cy.get(':nth-child(3) > .comentario-info > .text-sm > .isolate > .mx-1').click()
        // Now lets try the same but cancelling the edit
        // click the edit comment button
        cy.get(':nth-child(3) > .comentario-info > .text-sm > .isolate > .mx-1').click()
        // edit the comment
        cy.wait(1000)
        cy.get(':nth-child(3) > .comentario-info > .text-sm > .isolate > .mx-1').click()
        cy.get(':nth-child(3) > .px-3').type(' (editando comentario 2)')
        // cancelling the edit
        cy.get(':nth-child(3) > .comentario-info > .text-sm > .isolate > .bg-red-500').click()
      })

      it('Test-User Erase-Post-Comments', () => {
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
        // get to the post page
        cy.contains('Probando').click()
        // click the erase button
        cy.get('.bg-red-500').click()
      })
})