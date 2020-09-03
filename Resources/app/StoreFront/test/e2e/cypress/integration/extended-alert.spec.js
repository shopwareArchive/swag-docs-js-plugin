// / <reference types="Cypress" />
describe('PluginJsPlugin: Test is active', () => {

    it('checks for open alert when scrolling to bottom', () => {
        cy.visit('/');

        let result = null;
        cy.on('window:alert', (str) => {
            result = str;
        });

        cy.scrollTo('bottom');
        cy.wait(200).then(() => {
            expect(result).to.equal('seems like there\'s nothing more to see here.');
        });
    });
});
