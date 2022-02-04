module.exports = {
  after: function (browser) {
    console.log('I am done.');
  },

  'Demo test': function (browser) {
    browser
      .url('https://nightwatch-demo.netlify.com/')
      .waitForElementVisible('[data-nw=name-input]')
      .setValue('[data-nw=name-input]', 'Pierre')
      .pause(1000)
      .assert.textContains('[data-nw=welcome-message]', 'Welcome Pierre !')
      .end();
  }
};
