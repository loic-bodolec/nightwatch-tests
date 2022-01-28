module.exports = {
  src_folders: ['tests'],
  custom_commands_path: 'custom-commands',
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      launch_url: 'https://nightwatch-demo.netlify.com/',
      globals: {
        timeToWait: 1001
      }
    }
  }
};
