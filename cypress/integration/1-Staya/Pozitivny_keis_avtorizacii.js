
describe('Позитивный кейс авторизации', function () {
   it('Проверка, что при введенных валидных значениях авторизация проходит успешно и мы видим страницу Мои Заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mr_speed@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('iLoveqastudio1');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        
    })
})
