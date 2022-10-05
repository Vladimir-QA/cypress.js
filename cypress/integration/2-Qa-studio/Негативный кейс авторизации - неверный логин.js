
describe('Негативный кейс авторизации - неверный логин', function () {
   it('Проверка, что при введенном  не валидном значении логина авторизация не происходит', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikoff.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
