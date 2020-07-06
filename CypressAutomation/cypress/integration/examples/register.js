describe("Registration module scripts", function(){


    beforeEach('Launch Browser and Navigate to Url', ()=>{
        cy.visit("http://demowebshop.tricentis.com/")
    })

    
    it('Verify the registration screen in demo web shop with valid data', ()=>{
        cy.get('.ico-register').click()
        
        cy.get('#gender-male').click()
        cy.wait(5000)
        cy.get('#FirstName').type("Ramesh")
        cy.pause()
        cy.get('#LastName').type("Kudikala")
        cy.get('#Email').type("rktes22222@gmail.com")
        cy.get('#Password').type("123456")
        cy.get('#ConfirmPassword').type("123456")
        cy.wait(5000)
        cy.get('#register-button').click()
        cy.get('.result').should('be.visible')
        cy.get('.page-body > .buttons > .button-1').should('be.visible')
        cy.get('.ico-logout').should('be.visible')
        cy.get('.ico-logout').click()
    })

    it('Verify the registration screen in demo web shop with empty data and check error message', ()=>{

        cy.get('.ico-register').click()
        cy.get('#register-button').click()
        cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should('be.visible')
       // 1st level of assetion 
        cy.get(':nth-child(3) > .field-validation-error > span').should('be.visible')
        cy.get(':nth-child(4) > .field-validation-error > span').should('be.visible')
        cy.get(':nth-child(1) > .field-validation-error > span').should('be.visible')
        cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span').should('be.visible')
    })
   
    it('The test scenario  is to verify the register screen with already existing email.', ()=>{

        cy.get('.ico-register').click()
        
        cy.get('#gender-male').click()
        cy.get('#FirstName').debug()
        cy.get('#FirstName').type("Ramesh")
        cy.get('#LastName').type("Kudikala")
        cy.get('#Email').debug()
        cy.get('#Email').type("rktes2226@gmail.com")
        cy.get('#Password').type("123456")
        cy.get('#ConfirmPassword').type("123456")
        cy.get('#register-button').click()
        // 2nd level of assetion or validation with text 
        cy.get('.validation-summary-errors > ul > li').contains('The specified email already exists')

    })

    it('The test scenarios is to verify the number of links inthe website', ()=>{

        cy.wait(3000)
        cy.get('a').its('length').should('eq',95)
    })
   
})

