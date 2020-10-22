class iFramePage {

    getiFrame(){
        return cy.frameLoaded('#mce_0_ifr')
    }

    getFileButton(){
        return cy.iframe().get('#mceu_15-open')
    }

    getEditButton(){
        return cy.iframe().get('#mceu_16-open')
    }

    getViewButton(){
        return cy.iframe().get('#mceu_17-open')
    }

    getFormatButton(){
        return cy.iframe().get('#mceu_2-open')
    }

    getHeadings(){
        return cy.iframe().get('#mceu_32')
    }

    getHeading2(){
        return cy.iframe().get('#mceu_38')
    }

    getItalicizeButton(){
        return cy.iframe().get('#mceu_4 > button > .mce-ico')
    }

    getFirstFormat(){
        return cy.iframe().get('#mceu_29-0')
    }

    getSecondFormat(){
        return cy.iframe().get('#mceu_29-1')
    }
}

export default iFramePage;