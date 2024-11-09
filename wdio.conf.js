export const config = {
    
    runner: 'local',
    specs: [
        './test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
           build: 'appium-build-test-ebac',
           name: 'Ebac Shop Test',
           deviceOrientation: 'PORTRAIT',
           appiuVersion: '2.0.0'
         },

    }],
    logLevel: 'info',
    bail: 0,

        user: 'oauth-joycepontesf-bd69b',
        key: '1356f737-d84d-4f7f-9fd5-9b12604ad09f',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        capabilities,

    path: '/wd/hub',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
