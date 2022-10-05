
describe('Негативный кейс авторизации', function () {
   it('Проверка, что при введенном не валидном значении пароля мы получаем ошибку', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mr_speed@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('iLoveqastudio11111');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
        
    })
})
