import { email, password } from '../../fixtures/teste-data.json'

describe('Login Flow', () => {

    beforeEach(async () => {
        await $(~tab-profile).click()
    });
    
    it('deve fazer login com sucesso usando credenciais válidas', async () => {
        const emailField = await $('~email')
        const passwordField = await $('~password')
        const loginButton = await $('~btnLogin')
        const homeScreen = await $('~home-screen')

        await emailField.setValue(email)
        await passwordField.setValue(password)
        await loginButton.click()

        //await expect(homeScreen).toBeDisplayed()
    })

})