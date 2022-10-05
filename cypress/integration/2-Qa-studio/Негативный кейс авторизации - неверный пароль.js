
describe('Негативный кейс авторизации - неверный логин', function () {
   it('Проверка, что при введенном  не валидном значении пароля авторизация не происходит', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('idontLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
