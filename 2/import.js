// import * as what from './export.js';

// console.log(what.test().show2());
// console.log(what.temp);
// console.log(what.obj);

// to import default
import default_value from './export';
// or
import { default as default_value } from './export';

import default_value, { test, temp, obj } from './export';

console.log(test().show2());
console.log(temp);
console.log(obj);
console.log(default_value);

