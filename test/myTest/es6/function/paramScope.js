/**
 * 果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当 前函数的作用域，然后才是全局作用域。
 */
// 由于函数作用域内部的变量 x 已经生成，所以 y 等于参数 x ，而不是 全局变量 x 。
const x = 1
function f (x, y = x) {
  console.log(y)
}

f(2)

// 函数调用时， y 的默认值变量 x 尚未在函数内部生成，所以 x 指向全局变量.
function f1 (y = x) {
  const x = 1
  console.log(y)
}

f1()

// 如果函数 A 的参数默认值是函数 B ，由于函数的作用域是其声明时所在的作用域，那么函数 B 的作用域不是函数 A ，而是全局作用域。
let foo = 'outer'
function bar (func = x => foo) {
  let foo = 'inner'
  console.log(func())
}
bar()

// func = x => foo
/*
let func = function (x) {
  return foo
}
*/
/**
 * 函数 bar 的参数   ，默认是一个匿名函数，返回值为变量 foo 。这个匿名函数的作用域就不是 bar 。
 * 这个匿名函数声明时，是处在外层作用域，所以内部的 foo 指向函数体外的声明，输出 outer 。
 * ****
 * 它实际上等同于下面的代 码。
 */
let fooo = 'outer'
let ff = function (x) {
  return fooo
}

function barr (funcc = ff) {
  let fooo = 'inner'
  console.log(funcc())
}
barr()

// 报错
function f2 (funccc = x => foooo) {
  let foooo = 'inner'
  console.log(funccc())
}
/*f2()*/

/**
 * 应用：
 *  利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
 */
function throwIfMissing () {
  throw new Error('Missing parameter')
}
function f3 (a = throwIfMissing()) {
  return a
}

f3()
