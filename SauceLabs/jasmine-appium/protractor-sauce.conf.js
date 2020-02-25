//jshint strict: false
exports.config = {

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  capabilities: { 
    'browserName': 'browser',
    'appiumVersion': '1.5.3',
    'deviceName': 'Android Emulator',
    'platformVersion': '4.4',
    'platformName': 'Android',
    'name':'Web App Test with Protractor'
  },

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  baseUrl: 'https://angularjs.org/',

  framework: 'jasmine',

//The defaultTimeoutInterval tells Protractor how long to wait for a browser to start and connect to Protractor.
// default value is 30000, maximum value us 360000.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 180000
  }

};
