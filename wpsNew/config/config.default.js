/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615192302915_5531';
  config.mongo = {
    client: {
      host: "127.0.0.1",
      port: "27017",
      name: "baiyunsi",
      user: "",
      password: "",
      options: {},
    }
  }
  config.security = {
    csrf: {
      enable: false,
    },
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
