'use strict'

const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('hello');
hash.update('hello, nodejs');

console.log(hash.digest('oct'));
