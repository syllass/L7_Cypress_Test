/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import iFramePage from '../pageObjects/iFramePage'

describe('iFrames Test', function(){
    it('First Test', function(){

        //instantiate iFramePage class
        const iframePage = new iFramePage()

        //go to iFrame URL
        cy.visit(Cypress.env('iFrameURL'))

        //using the iFrame library, target the iFrame
        iframePage.getiFrame()

        //clear iFrame default text and type message (also asserts the message)
        cy.iframe().clear().type('This is some text that shall have some special formatting.')
        .should('have.text', 'This is some text that shall have some special formatting.')

        //selects all text in the text field
        cy.iframe().type('{ctrl}a')

        //formats text with the Heading 2 format
        iframePage.getFormatButton().click()
        iframePage.getHeadings().trigger('mouseover')
        iframePage.getHeading2().click()
        
        //italicize text
        iframePage.getItalicizeButton().click()

        //Assert that h2 and italicize (em) are present
        //Assert that no other formatting is present
        iframePage.getFirstFormat().should('have.text', 'h2')
        iframePage.getSecondFormat().should('have.text', 'em')

        //Assert that the text is still correct
        cy.iframe().should('have.text', 'This is some text that shall have some special formatting.')

    })
})