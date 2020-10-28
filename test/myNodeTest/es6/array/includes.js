/**
 * Array.prototype.includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 includes 方法类似。
 * 该方法属于ES7，但Babel转码器已经支持。
 **/
console.log([1, 2, 3].includes(2))
console.log([1, 2, 3].includes(4))
console.log([1, 2, 3].includes(NaN))
console.log([1, 2, 3, NaN].includes(NaN))

/**
 * 该方法的第二个参数表示搜索的起始位置，默认为0。
 * 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度 (比如第二个参数为-4，但数组长度为3)，则会重置为从0开始。
 **/
console.log('*************')
console.log([1, 2, 3].includes(2, 0))
console.log([1, 2, 3].includes(2, 1))
console.log([1, 2, 3].includes(2, 2))
console.log([1, 2, 3].includes(2, -1))
console.log([1, 2, 3].includes(2, -2))
console.log([1, 2, 3].includes(2, -3))
console.log('*************')
console.log([1, 2, 3].includes(3, -1))
console.log([1, 2, 3].includes(3, -2))
console.log([1, 2, 3].includes(1, -4))

/**
 * 没有该方法之前，我们通常使用数组的 indexOf 方法，检查是否包含某个值。
 **/
console.log('*************')
console.log([1, 2, 3].indexOf(2))
console.log([1, 2, 3].indexOf(4))

/**
 * includes 和 indexOf 区别：
 * 对NaN的误判
 */
console.log('************')
console.log([NaN].indexOf(NaN) === -1)
console.log([NaN].includes(NaN))

/**
 * 下面代码用来检查当前环境是否支持该方法，如果不支持，部署一个简易的替代版本。
 */
// 1
const contains = function (arr, value) {
  return Array.prototype.includes
    ? arr.includes(value)
    : arr.some(el => el === value)
}
console.log('************')
console.log(contains(['a', 'b'], 'c'))

// 2
const contains2 = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)()

console.log('***********')
console.log(contains2([1, 2], 3))

// 3
const contains3 = (arr, value) =>
  Array.prototype.includes
    ? arr.includes(value)
    : arr.some(el => el === value)
console.log('**********')
console.log(contains3([1, 2], 3))
