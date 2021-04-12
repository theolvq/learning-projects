//* CommonJS - every file in node is a module (by default)
//* Modules - Encapsulated Code (only share minimum info)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi(names.john);
sayHi(names.peter);
sayHi(names.susan);
