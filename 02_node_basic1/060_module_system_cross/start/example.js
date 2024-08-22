// CJSとESM間のモジュール連携
// OK: CJS → ESM
// NG: ESM → CJS

import {plus} from './calc.cjs';
// console.log(calc);
const result = plus(1, 2);
console.log(result);
