/// <reference types="cypress" />

import  {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_pages from "../pages/home_pages"
import login_pages from "../pages/login_pages"

const email = 'evelynholanda@gmail.com'
const password = 'qazando1234'

Given('I am login screen', () => {
// Chamar ações
    home_pages.acessLogin()

})

Given('I fill field e-mail', () => {
    login_pages.fillEmail(email)
    
})

Given('I fill field all my credencials', () => {
    login_pages.fillEmail(email)
    login_pages.fillPassword(password)
})

When('I click an login button', () => {
    login_pages.doLogin()

})

Then('I see an message {string}', (message) => {
    login_pages.checkErrorMessage(message)
})

Then('I see sucess message', async () => {
    await login_pages.checkSucessMessage(email)
})

