/**
 * JavaScript语言定义对象的属性，有两种方法。
 *  方法一是直接用标识符作为属性名
 *  方法二是用表达式作为属性名，这时要将表达式放在方括号之内
 */
const obj = {

}

obj.foo = true
obj['a' + 'bc'] = 123
console.log(obj)

// 如果使用字面量方式定义对象(使用大括号)，在ES5中只能使用方法一(标识符)定义属性。

const obj2 = {
  foo: true,
  abc: 123
}
console.log(obj2)

// ES6允许字面量定义对象时，用方法二(表达式)作为对象的属性名，即把表达式放在方括号内。
let propKey = 'foo'
let obj3 = {
  [propKey]: true,
  ['a' + 'bc']: 123
}
console.log(obj3)

const lastWord = 'last word'

const a = {
  'first word': 'hello',
  [lastWord]: 'word'
}
console.log(a['first word'])
console.log(a[lastWord])
console.log(a['last word'])
console.log(a)

// 表达式还可以用于定义方法名。
const obj4 = {
  ['h' + 'ello'] () {
    return 'hi'
  },
  get getObj () {
    return 'get'
  }
}

console.log(obj4.hello())
console.log(obj4.getObj)

// 注意，属性名表达式与简洁表示法，不能同时使用，会报错。
const foo = 'bar'
const bar = 'abc'
/* ⬇️错
const baz = {
  [foo]
}*/

// ⬇️正确
const baz2 = {
  [foo]: 'foooo'
}
console.log(baz2)

