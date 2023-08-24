Feature: Login

    Eu como cliente
    Quero fazer login na aplicação
    Para realizar um pedido de compra

    Scenario: Login com campo de e-mail vazio
        Given I am login screen
        When I click an login button
        Then I see an message "E-mail inválido."


    Scenario: Login com campo de senha vazia
        Given I am login screen
        And I fill field e-mail
        When I click an login button
        Then I see an message "Senha inválida."


    Scenario: Login com sucesso
        Given I am login screen
        And I fill field all my credencials
        When I click an login button
        Then I see sucess message 


