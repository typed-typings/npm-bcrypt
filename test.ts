/// <reference path="bundle.d.ts" />

import assert = require('assert');
import bcrypt = require('bcrypt');

assert.equal(typeof bcrypt.genSaltSync(), 'string');
