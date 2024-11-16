export const config = {
    user: 'oauth-joycepontesf-bd69b',
    key: '1356f737-d84d-4f7f-9fd5-9b12604ad09f',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: '',
    path: '/wd/hub',
    runner: 'local',
    specs: [
        './test/specs/*.js'
    ],
    // beforeSession: async function (config, capabilities) {
    // },
    // before: async function (capabilities, specs) {
    // },    
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
        'platformName': 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            build: 'appium-build-ebac-mobile-2',
            name: 'QE EBAC Shop',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0'
            },
        'appium:disableIdLocatorAutocompletion': true
        }
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    appium: {
        command: 'appium'
    }
}