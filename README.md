## dotenv-json
Package similar to dotenv to read from .json files.  It looks for files based on NODE_ENV.  Ex:  .env.development.json

## Usage

### ES6
```
import dotenv from "dot-env-json";
dotenv();
```

### CMD
```
node -r dot-env-json/lib/config
# change base directory from root
node -r dot-env-json/lib/config dotenv_config_base=config/
```

## Configuration
Accepts an options object.  Only valid option currently is base which sets the base path to look for files.
```
import dotenv from "dot-env-json";

# approot/config/.env.development.json
dotenv({
  base: "config/"
});
```

## Cross Env
Since this package uses NODE_ENV it is recommended to use the [cross-env](https://github.com/kentcdodds/cross-env) package to set the environment in your run scripts.
```
# gets the json file approot/env.test.json
cross-env NODE_ENV=test node -r dot-env-json/lib/config yourfile.js
# gets the json file approot/config/env.development.json
cross-env NODE_ENV=development node -r dot-env-json/lib/config dotenv_config_base=config/ yourfile.js
```
