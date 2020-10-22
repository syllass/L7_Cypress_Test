/// <reference types="Cypress" />
import '@4tw/cypress-drag-drop'

describe('Drag and Drop Test', function(){
    it('First Test', function(){

        //go to Drag and Drop URL
        cy.visit(Cypress.env('dragAndDropURL'))

        //Drag A box to the B box
        cy.get('#column-a').drag('#column-b')

        //Assert that the box with B is now in the first column
        cy.get('#column-a').find('header').should('have.text', 'B')

        //Assert that the box with A is now in the second column
        cy.get('#column-b').find('header').should('have.text', 'A')
    })
})