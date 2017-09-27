const assert = require('assert');
const dotenvJson = require('../index.js');

describe('dotenvJson', () => {
  it('should read json file', () => {
    dotenvJson.config();
    assert(true, process.env.TESTY === 'testy');
  });
});
