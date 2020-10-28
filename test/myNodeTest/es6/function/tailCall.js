/**
 * 尾调用(Tail Call)是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一 个函数。
 */
function f (x) {
  return g(x)
}
function g (x) {
  console.log(x)
}
f(1)

// 以下三种情况，都不属于尾调用。
// 1、
function f1 (x) {
  let y = g(x)
  return y
}

// 2、
function f2 (x) {
  return g(x) + 1
}

// 3、
function f3 (x) {
  g(x)
  // 省略了return
  // return undefined;
}
f1()
f2()
f3()

/**
 * 尾调用优化
 *  函数调用会在内存形成一个“调用记录”，又称“调用帧”(call frame)，保存调用位置和内部变量等信息。
 *  如果在函 数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会 消失。
 *  如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”(call stack)。
 */
function func1 () {
  let m = 1
  let n = 2; return g(m + n)
}
func1()

// 等同于
function func2 () {
  return g(3)
}
func2()

// 等同于
// func3(3)
/**
 * ⬆️
 * 这就叫做“尾调用优化”(Tail call optimization)，即只保留内层函数的调用帧。
 * 如果所有函数都是尾调用，那么完全可以做到每 次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。
 */

/**
 * 尾递归
 *  函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
 *  递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误(stack overflow)。
 *  但对于尾递归来说， 由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 */
function factorial (n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5))

// 转换成尾递归
// ⬆️上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。
// ⬇️如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。
function factorial2 (n, total) {
  if (n === 1) return total
  return factorial2(n - 1, n * total)
}

console.log(factorial2(5, 1))

/**
 * 尾递归的改写
 *  尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函 数的参数。
 *  缺点就是不太直观，第一眼很难看出来，为什么计算5的阶乘，需要传入两个参数5和1?
 *  两个方法可以解决这个问题。
 */
// 方法一是在尾递归函数之外，再提供一个正常形式的函数。
function factorial3 (n) {
  return tailFactorial(n, 1)
}

function tailFactorial (n, total) {
  if (n === 1) return total
  return tailFactorial(n - 1, n * total)
}

console.log(factorial3(5))

// ⬆️ 上面代码通过一个正常形式的阶乘函数 factorial ，调用尾递归函数 tailFactorial ，看起来就正常多了。
// ⬇️ 函数式编程有一个概念，叫做柯里化(currying)，意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。
function currying (fn, n) {
  return function (m) {
    console.log('m:', m)
    return fn.call(this, m, n)
  }
}
function tailFactorial2 (n, total) {
  if (n === 1) return total
  return tailFactorial(n - 1, n * total)
}
const factorial4 = currying(tailFactorial2, 1)
console.log(factorial4(5)) // 120
console.log(currying(tailFactorial2, 1)(5))

// 第二种方法是采用ES6的函数默认值
function factorial5 (n, total = 1) {
  if (n === 1) return total
  return factorial5(n - 1, n * total)
}

console.log(factorial5(5))

/**
 * 严格模式
 *  ES6的尾调用优化只在严格模式下开启，正常模式是无效的。 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
 *  func.arguments :返回调用时函数的参数。
 *  func.caller :返回调用当前函数的那个函数。
 *  尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
 */
/*function restricted () {
  'use strict'
  restricted.caller // 报错
  restricted.arguments // 报错
}*/
// restricted()

/**
 * 尾递归优化的实现(正常模式)
 *  尾递归优化只在严格模式下生效，那么正常模式下，或者那些不支持该功能的环境中，有没有办法也使用尾递归优化呢?回答 是可以的，就是自己实现尾递归优化。
 *  它的原理非常简单。尾递归之所以需要优化，原因是调用栈太多，造成溢出，那么只要减少调用栈，就不会溢出。怎么做可以 减少调用栈呢?就是采用“循环”换掉“递归”。
 */
function sum (a, b) {
  if (b > 0) {
    return sum(a + 1, b - 1)
  } else {
    return a
  }
}
// sum(1, 100000)

// 优化(我自己的理解)
function sum2 (a, b) {
  for (b; b > 0; b--) {
    a++
  }
  return a
}

console.log(sum2(1, 100000))

// 优化（蹦床模式（trampoline）可以将递归执行转为循环执行）
function sum3 (x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1)
  } else {
    return x
  }
}

function trampoline (f) {
  while (f && f instanceof Function) {
    f = f()
  }
  return f
}

// console.log(trampoline(sum3(1, 100000)))

// 真正的尾递归优化
function tco (f) {
  var value
  var active = false
  var accumulated = []
  return function accumulator () {
    accumulated.push(arguments)
    // var func = accumulated.shift()
    console.log(accumulated)
    if (!active) {
      active = true
      while (accumulated.length) {
        // console.log('this:', this)
        // console.log('func:', arguments) // { '0': 1, '1': 100000 }
        value = f.apply(this, accumulated.shift())
        console.log(value)
      }
      active = false
      return value
    }
  }
}
var sum4 = tco(function (x, y) {
  // console.log(x, y)
  if (y > 0) {
    return sum4(x + 1, y - 1)
  } else {
    return x
  }
})
console.log(sum4(1, 2))
