const fs = require('fs');
const rootPath = require('app-root-path');

function config(config = {}) {
  if (config.base && config.base[config.base.length - 1] !== '/') {
    config.base += '/';
  }
  const envPath = `${rootPath}/${config.base || ""}.env.${process.env.NODE_ENV}.json`;
  if (fs.existsSync(envPath)) {
    execute(envPath);
  } else {
    throw new Error(`${envPath} does not exist`);
  }
}

function execute(envPath) {
  const config = require(envPath);
  for (const key in config) {
    if (typeof config[key] === 'string') {
      process.env[key] = config[key];
    } else {
      process.env[key] = JSON.stringify(config[key]);
    }
  }
}

module.exports = {
  default: config,
  config: config
};
