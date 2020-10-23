/**
 * 拓展运算符
 *  含义：
 *    扩展运算符(spread)是三个点( ... )。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
 */
console.log(...[1, 2, 3])
console.log(1, ...[2, 3, 4], 5)

/**
 * 该运算符主要用于函数调用。
 * @param array
 * @param values
 * @returns {*}
 */
function push (array, ...values) {
  array.push(...values)
  return array
}

const a = []
console.log(push(a, 1, 2, 3))

function add (x, y) {
  return x + y
}

console.log(add(...[1, 2]))

/**
 * 扩展运算符与正常的函数参数可以结合使用
 */
function f (a, b, c, d, e) {
  console.log(a, b, c, d, e)
}
f(5, ...[4, 3], 2, ...[1])

/**
 * 替代数组的apply方法
 */
// ES5
function f1 (a, b, c) {
  console.log(a, b, c)
}

console.log('*********')
f1.apply(null, [1, 2, 3])

// ES6
f1(...[1, 2, 3])

/**
 * （例2）通过push添加数组
 */

// ES5
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
Array.prototype.push.apply(arr1, arr2)
console.log(arr1)

// ES6
const arr3 = [1, 2, 3]
arr3.push(...arr2)
console.log(arr3)
