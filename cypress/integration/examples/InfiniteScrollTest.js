/// <reference types="Cypress" />

describe('Infinite Scroll Test', function(){
    it('First Test', function(){

        //go to Infinite Scroll URL
        cy.visit(Cypress.env('infiniteScrollURL'))

        //initialize variables
        var childDivCount = 3
        var scrolls = 0

        //loop that scrolls down the page multiple times and then asserts that new child divs have been created
        for( var j = 0 ; j < 3; j++) {
            for( var i = 0 ; i < 3; i++) {
                cy.scrollTo(scrolls, scrolls+500)
               scrolls += 500
               cy.wait(500)
              }
            cy.get('.jscroll-added').should('have.length.greaterThan', childDivCount+1)
            childDivCount++
        }
    })
})