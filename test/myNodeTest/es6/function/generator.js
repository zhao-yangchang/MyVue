/**
 * Generator函数时ES6提供的一种异步编程解决方案。语法行为和普通函数完全不同，我们可以把Generator理解为一个包含了多个内部状态的状态机。
 * 执行Generator函数回返回一个遍历器对象，也就是说Generator函数除了提供状态机，还可以生成遍历器对象。
 * Generator可以此返回多个遍历器对象，通过这个对象可以访问到Generator函数内部的多个状态。
 */
/**
 * 形式上Generator函数和普通的函数有两点不同：
 *  一是function关键字后面，函数名前面有一个星花符号“*”
 *  二是，函数体内部使用yield定义（生产）不同的内部状态
 */
/**
 * 执行Generator函数返回的是一个遍历器对象，这个对象上有一个next方法，执行next方法会返回一个对象，这个对象上有两个属性，
 *  一个是value，是yield关键字后面的表达式的值，
 *  一个是done，布尔类型，false表示没有遇到return语句，可以继续往下执行，true表示遇到return语句。
 */
function* f () {
  yield 'hello'
  yield 'world'
  return 'ending'
}

const first = f()
console.log(first.next())
console.log(first.next())
console.log(first.next())
console.log(first.next())
console.log(first.next())

/**
 * ⬆️注意yield表达式后面的表达式，只有当调用next方法，内部指针指向该语句时才会执行，相当于JavaScript提供了手动的“惰性求值”语法功能。
 */

function f1 () {
  return 'ending'
}

console.log(f1())

/**
 * Generator函数中可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数
 * 只有调用next方法的时候，函数才会执行
 */
function* f2 () {
  console.log('+++++++++')
}

const ff = f2()
console.log(ff.next())
setTimeout(function () {
  console.log(ff.next())
}, 2000)

/**
 * yield表达式只能用在Generator函数里面，用在其他地方都会报错
 */
const arr = [1, [[2, 3], 4], [5, 6]]
/* 因为forEach方法的参数是一个普通函数，但是在里面使用了yield表达式。
const flat = function* (a) {
  a.forEach(function (item) {
    if (typeof item !== 'number') {
      yield * flat(item)
    } else {
      yield item
    }
  })
}
for (let f of flat) {
  console.log(f)
} */
const flat = function* (a) {
  for (let i = 0; i < a.length; i++) {
    const item = a[i]
    if (typeof item !== 'number') {
      yield * flat(item)
    } else {
      yield item
    }
  }
}
for (let f of flat(arr)) {
  console.log(f)
}

/**
 * 如果yield表达式用在另外一个表达式之中，必须放在圆括号内部。
 */
function* f3 () {
  for (var i = 0; true; i++) {
    var reset = yield i
    if (reset) { i = -1 }
  }
}
var g = f3()
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
