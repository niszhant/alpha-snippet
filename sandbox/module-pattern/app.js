const greet1 = require('./greet-1');
greet1();

const greet2 = require('./greet-2').greet;
greet2();

const greet3 = require('./greet-3');
greet3.greet();
delete greet3.modulePattern;

const greet3_edited = require('./greet-3');
greet3_edited.greet();


const moduleTemplate = require('./greet-4');
const moduleObj = new moduleTemplate();
moduleObj.greet();


const greet5 = require('./greet-5');
greet5.greet();