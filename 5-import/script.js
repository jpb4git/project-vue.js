//5-1 Import

import {hello} from './functions.js'

hello()

// 5-2 Export
const [a, b] = [7, 9];

import {default as test} from './functions.js'
// sans accollade test est affecté à default si test n'existe pas dans les declaration 
 // import test from './functions.js'

test();