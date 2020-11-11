/**
 * ES6一共有6种方法可以遍历对象的属性。
 *  1、for ... in 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)。
 *  2、Object.keys(obj) 返回一个数组，包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)。
 *  3、Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性(不含Symbol属性，但是包括不可枚举属性)。
 *  4、Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有Symbol属性。
 *  5、Reflect.ownKeys(obj) 返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
 *  6、Reflect.enumerate(obj) 返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性(不含Symbol属性)，与 for...in 循 环相同。
 */
/**
 * 以上的6种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。
 *    1、首先遍历所有属性名为数值的属性，按照数字排序。
 *    2、其次遍历所有属性名为字符串的属性，按照生成时间排序。
 *    3、最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
 */
console.log(Reflect.ownKeys({[Symbol()]: 0, c: 0, 10: 0, 5: 0, 2: 0, 4: 0, a: 0, b: 0}))
