const fs = require('fs');
const rootPath = require('app-root-path');

function config(base = '') {
  if (base && base[base.length - 1] !== '/') {
    base += '/';
  }
  const envPath = `${rootPath}/.env.${process.env.NODE_ENV}.json`;
  console.log('ENVPATH: ' + envPath);
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
