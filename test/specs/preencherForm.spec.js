describe('Funcionalidade de Form do webdriver.io', () => {
    it('Deve preencher o formulário com sucesso', async () => {

        await $('~Forms').click()
        await $('~text-input').setValue('Teste WebDriverIO')
        await $('~switch').click()
        await $('~Dropdown').click()
        await $(`//android.widget.CheckedTextView[@text="Appium is awesome"]`).click()
        await driver.execute('mobile:scroll', { direction: 'down', strategy: 'accessibility id', selector: '~button-Active' })
        await driver.pause(500)
        await $('~button-Active').click()
        await driver.pause(2000)

        const elemento = await $('android=new UiSelector().resourceId("android:id/message")')
        await elemento.waitForExist()
        const texto = await elemento.getText()
        
        expect(texto).toEqual('This button is active', 'O texto do elemento não corresponde ao esperado.')
    })
})