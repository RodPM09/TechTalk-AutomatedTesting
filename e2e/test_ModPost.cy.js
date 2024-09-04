describe('Test-Moderator Post-Actions TechTalk', () => {
    it('Test-User Post-Comments', () => {
      // get to the login page
      cy.visit('/login')
      // fill the fields
      cy.fixture('./data.json').then((user) => {
        cy.get('#email').type(user.mod_email)
        cy.get('#password').type(user.mod_pass)
      })
      // click the button
      cy.get('form').submit()
      // validation
      cy.url('').should('eq','http://localhost:3000/admin')
      // get to the post page
      cy.contains('Probando').click()
      // fill the comment field
      cy.get('#commentText').type('Probando comentario moderador')
      // click the send comment button
      cy.get('form').submit()
    })

    it('Test-Moderator Edit-Post-Comments', () => {
        // get to the login page
        cy.visit('/login')
        // fill the fields
        cy.fixture('./data.json').then((user) => {
          cy.get('#email').type(user.mod_email)
          cy.get('#password').type(user.mod_pass)
        })
        // click the button
        cy.get('form').submit()
        // validation
        cy.url('').should('eq','http://localhost:3000/admin')
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

      it('Test-Moderator Erase-Post-Comments', () => {
        // get to the login page
        cy.visit('/login')
        // fill the fields
        cy.fixture('./data.json').then((user) => {
          cy.get('#email').type(user.mod_email)
          cy.get('#password').type(user.mod_pass)
        })
        // click the button
        cy.get('form').submit()
        // validation
        cy.url('').should('eq','http://localhost:3000/admin')
        // get to the post page
        cy.contains('Probando').click()
        // click the delete/trash button
        cy.get('.bg-red-500').click()
      })

      it('Test-Moderator Post-Creation', () => {
        // get to the login page
        cy.visit('/login')
        // fill the fields
        cy.fixture('./data.json').then((user) => {
          cy.get('#email').type(user.mod_email)
          cy.get('#password').type(user.mod_pass)
        })
        // click the button
        cy.get('form').submit()
        // validation
        cy.url('').should('eq','http://localhost:3000/admin')
        // get to the post creation page
        cy.contains('Create Post').click()
        // fill the fields
        cy.get('#title').type('Moderador testing')
        cy.get('#description').type('Descripcion moderador testing')
        cy.get('#categories').type('Moderador testing')
        cy.get('#source').type('Moderador')
        cy.get('#author').type('Moderador')
        cy.get('#image').selectFile('Documents/Story Map.png')
        // click the button
        cy.get('form').submit()
      })

      it('Test-Moderator Edit-Post', () => {
        // get to the login page
        cy.visit('/login')
        // fill the fields
        cy.fixture('./data.json').then((user) => {
          cy.get('#email').type(user.mod_email)
          cy.get('#password').type(user.mod_pass)
        })
        // click the button
        cy.get('form').submit()
        // validation
        cy.url('').should('eq','http://localhost:3000/admin')
        // get to the edit button
        cy.get(':nth-child(1) > .container > .flex.px-4 > .relative > .p-2').click()
        // click the edit button
        cy.get(':nth-child(1) > .container > .flex.px-4 > .relative > .absolute > :nth-child(2)').click()
        // Edit the fields
        cy.get('#title').type(' edit')
        cy.get('#description').type(' edit')
        cy.get('#categories').type(' edit')
        cy.get('#source').type(' edit')
        cy.get('#author').type(' edit')
        cy.get('#image').selectFile('Documents/Story Map.png')
        // click the button
        cy.get('form').submit()
      })

      it('Test-Moderator Delete-Post', () => {
        // get to the login page
        cy.visit('/login')
        // fill the fields
        cy.fixture('./data.json').then((user) => {
          cy.get('#email').type(user.mod_email)
          cy.get('#password').type(user.mod_pass)
        })
        // click the button
        cy.get('form').submit()
        // validation
        cy.url('').should('eq','http://localhost:3000/admin')
        // get to the delete button
        cy.get(':nth-child(1) > .container > .flex.px-4 > .relative > .p-2').click()
        // click the delete button
        cy.get(':nth-child(1) > .container > .flex.px-4 > .relative > .absolute > :nth-child(3)').click()
        // reaffirm the deletion of the post
        cy.get('.bg-red-500').click()
      })
})