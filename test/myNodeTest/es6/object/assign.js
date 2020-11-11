/**
 * 基本用法
 *  Object.assign 方法用于对象的合并，将源对象(source)的所有可枚举属性，复制到目标对象(target)。
 *  Object.assign 方法的第一个参数是目标对象，后面的参数都是源对象。
 */
const target = { a: 1 }
const source1 = { b: 2 }
const source2 = { c: 3 }
Object.assign(target, source1, source2)
console.log(target)
console.log(source1)
console.log(source2)
source1.b = 4
console.log(target)
console.log(source1)

// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
const target2 = { a: 1, b: 2 }
const source3 = { b: 4, c: 5 }
const source4 = { c: 6, d: 7 }
Object.assign(target2, source3, source4)
console.log(target2)

// 如果只有一个参数， Object.assign 会直接返回该参数。
const obj = { a: 1 }
Object.assign(obj)
console.log(obj)
console.log(Object.assign(obj) === obj)

// 如果该参数不是对象，则会先转成对象，然后返回。
console.log(typeof Object.assign(2))

// 由于 undefined 和 null 无法转成对象，所以如果它们作为参数，就会报错。
// Object.assign(undefined)
// Object.assign(null)

// 如果非对象参数出现在源对象的位置(即非首参数)，那么处理规则有所不同。
// 首先，这些参数都会转成对象，如果无法转成 对象，就会跳过。
// 这意味着，如果 undefined 和 null 不在首参数，就不会报错。

const obj2 = { a: 1 }
console.log(Object.assign(obj2, undefined) === obj2)
console.log(Object.assign(obj2, null) === obj2)

// 其他类型的值(即数值、字符串和布尔值)不在首参数，也不会报错。
// 但是，除了字符串会以数组形式，拷贝入目标对象，其 他值都不会产生效果。
const v1 = 'abc'
const v2 = true
const v3 = 10

const obj3 = Object.assign({}, v1, v2, v3)
console.log(obj3)

// ⬆️v1 、 v2 、 v3 分别是字符串、布尔值和数值，结果只有字符串合入目标对象(以字符数组的形式)，数值 和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
console.log(Object(true))
console.log(Object(10))
console.log(Object('abc'))

// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性(不拷贝继承属性)，也不拷贝不可枚举的属性 ( enumerable: false )。
console.log(Object.assign({ b: 'c'}, Object.defineProperty({}, 'inivisible', {
  enumerable: false,
  value: 'hello'
})))

const test = {}
console.log(Object.defineProperty(test, 'inivisible', {
  enumerable: false,
  value: 'hello'
}))
console.log(test)

// 属性名为Symbol值的属性，也会被 Object.assign 拷贝。
console.log(Object.assign({ a: 'b'}, { [Symbol('c')]: 'd' }))

/**
 * **************************************************************************************************************
 * *Object.assign 方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到 的是这个对象的引用。*
 * **************************************************************************************************************
 */
const obj4 = { a: {b: 1} }
const obj5 = Object.assign({}, obj4)
obj4.a.b = 5
console.log(obj5)

// 有一些函数库提供 Object.assign 的定制版本(比如Lodash的 _.defaultsDeep 方法)，可以解决浅拷贝的问题，得到深拷贝的合并。
// 注意， Object.assign 可以用来处理数组，但是会把数组视为对象。
console.log(Object.assign([1, 2, 3], [4, 5]))

/**
 * 常见用途
 *  (1)为对象添加属性
 *  (2)为对象添加方法
 *  (3)克隆对象
 *  (4)合并多个对象
 *  (5)为属性指定默认值
 */
// 1、
const origin = {
  a: '1',
  b: '2'
}
console.log(Object.assign(origin, {c: '3'}))

// 2、
const origin2 = {
  name: 'zhaoyc',
  sayHello: function () {
    console.log('hello')
  }
}
console.log(Object.assign(origin2, {
  getName: function () {
    console.log(this.name)
  }
}))
origin2.getName()

// 3、
// 缺点：只能克隆原始对象自身的值，不能克隆它继承的值
function clone (origin) {
  return Object.assign({}, origin)
}
console.log(clone({a: '1'}))
// 优化
function clone2 (origin) {

}

// 4、
console.log(Object.assign({}, {
  a: 1
}, {
  b: 2
}, {
  c: 3
}))

// 5、
const DEFAULTS = {
  level: 0,
  name: 'zhoayc'
}

function setDefault (options) {
  const result = Object.assign({}, DEFAULTS, options)
  return result
}

console.log(setDefault({
  name: 'zhaoyangchang',
  age: 18
}))

/**
 * ⬆️注意，由于存在深拷贝的问题， DEFAULTS 对象和 options 对象的所有属性的值，都只能是简单类型，而不能指向另一个对 象。否则，将导致 DEFAULTS 对象的该属性不起作用。
 */
