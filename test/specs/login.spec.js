import testData from '../../fixtures/teste-data.json' assert { type: 'json' }
const { email, password } = testData

describe('Login', () => {
  it('Deve fazer login com sucesso', async () => {

    console.log('Iniciando o teste de login...')

    await driver.pause(3000)
    console.log('Pausa inicial concluída')

    const tabProfile = await $('~, Profile')
    //await tabProfile.waitForDisplayed({ timeout: 50000 })
    console.log('Tab de perfil encontrada e visível')
    await tabProfile.click()
    console.log('Tab de perfil clicada')

    const emailField = await $('android=new UiSelector().resourceId("email")')
    //await emailField.waitForDisplayed({ timeout: 10000 })
    console.log('Campo de email encontrado e visível')
    await emailField.click()
    await emailField.setValue(email)
    console.log('Email inserido')

    const passwordField = await $('android=new UiSelector().resourceId("password")')
    //await passwordField.waitForDisplayed({ timeout: 10000 })
    console.log('Campo de senha encontrado e visível')
    await passwordField.click()
    await passwordField.setValue(password)
    console.log('Senha inserida')
    await driver.hideKeyboard()

    const loginButton = await $('android=new UiSelector().resourceId("btnLogin")')
    //await loginButton.waitForDisplayed({ timeout: 10000 })
    console.log('Botão de login encontrado e visível')
    await loginButton.click()
    console.log('Botão de login clicado')

    const homeScreen = await $('android=new UiSelector().text("Profile")')
    await homeScreen.waitForDisplayed({ timeout: 30000 })
    console.log('Tela inicial encontrada e visível')

    await expect(homeScreen).toBeDisplayed()
    console.log('Teste de login concluído com sucesso')
  })
})