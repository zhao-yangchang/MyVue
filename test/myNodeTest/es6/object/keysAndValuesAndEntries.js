/**
 * 1、Object.keys()
 *    ES5引入了 Object.keys 方法，返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键 名。
 */
const obj = { foo: 'bar', baz: 42 }
console.log(Object.keys(obj))

const obj2 = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

for (let [key, value] of Object.entries(obj2)) {
  console.log([key, value])
}

/**
 * Object.values()
 *    方法返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值。
 *    返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。
 */
// 属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是 b 、 c 、 a 。
let obj3 = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.values(obj3))
Object.setPrototypeOf(obj3, {a: 1})
console.log(obj3.__proto__)

// Object.values 只返回对象自身的可遍历属性。
var obj5 = Object.create(Object.setPrototypeOf({}, {b: 11}), {p: {a: 1}})
console.log(obj5)
console.log(obj5.prototype)

Object.setPrototypeOf(obj2, {d: 4})
console.log(obj2.__proto__)
const obj4 = {}
obj4.prototype = Object.create(obj2, { p: { value: 42 } })
// obj4.prototype = Object.create( {p: {vlaue: 43}})
console.log(obj4.prototype.__proto__)
console.log(JSON.stringify(obj4.prototype))

// Object.values会过滤属性名为Symbol值的属性。
console.log(Object.values({[Symbol()]: 123, foo: 'abc'}))

// 如果 Object.values 方法的参数是一个字符串，会返回各个字符组成的一个数组。
console.log(Object.values('foo'))

// 如果参数不是对象， 会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。 所以会返回空数组。
console.log(Object.values(42))
console.log(Object.values(true))

/**
 * Object.entries
 *    Object.entries 方法返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值对数组。
 *    该方法的行为与 Object.values 基本一致。
 */
console.log(Object.entries({}))
