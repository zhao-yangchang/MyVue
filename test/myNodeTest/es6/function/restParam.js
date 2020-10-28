/**
 * ES6引入rest参数(形式为“...变量名”)，用于获取函数的多余参数，这样就不需要使用arguments对象了。
 * rest参数搭配的变量是 一个数组，该变量将多余的参数放入数组中。
 */
function add (...values) {
  let sum = 0
  for (let value of values) {
    sum = sum + value
  }
  return sum
}

console.log(add(1, 2, 3))

/**
 * rest参数代替arguments变量的例子。
 */
// 比较函数
var compare = function (x, y) {
  if (x < y) {
    return -1
  } else if (x > y) {
    return 1
  } else {
    return 0
  }
}
// rest参数代替arguments变量的例子
function sortNumbers () {
  return Array.prototype.slice.call(arguments).sort()
}

// rest参数的写法
const sortNumbers2 = function (...values) {
  return values.sort(compare)
}
// 另一种写法
const sortNumbers3 = (...values) => values.sort(compare)

console.log(sortNumbers(20, 2, 1))
console.log(sortNumbers2(10, 4, 3))
console.log(sortNumbers3(10, 8, 7))

/**
 * 利用rest参数改写数组push方法
 */
const a = []
function push (array, ...values) {
  values.forEach(value => {
    array.push(value)
  })
  return array
}

console.log(push(a, 1, 2, 3))

/**
 * 注意，rest参数之后不能再有其他参数(即只能是最后一个参数)，否则会报错。
 */
