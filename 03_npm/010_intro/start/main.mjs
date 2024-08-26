import _ from "../lib/lodash.js";

const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = _.cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);