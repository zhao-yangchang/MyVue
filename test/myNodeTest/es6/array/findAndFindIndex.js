/**
 * 数组实例的 find 方法，用于找出<<第一个符合条件>>的数组成员。
 * 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 true 的成员，然后返回该成员。
 * 如果没有符合条件的成员，则返回 undefined 。
 **/
console.log([0, 13, 20, -1, -11].find(value => value > 0))

console.log([0, 8, 13, 15, -1].find(function (value, index, arr) {
  console.log(value + ':' + index + ':' + arr)
  return value > 9
}))

console.log([0, 13, 20, -1, -11].findIndex(value => value > 10))

console.log([0, 13, 20, -1, -11].findIndex(function (value, index, obj) {
  if (value > 15) {
    return value
  }
}))

var date = '2015-03-05 17:59:00.0'
date = date.substring(0, 19)
date = date.replace(/-/g, '/') // 必须把日期'-'转为'/'
var timestamp = new Date(date).getTime()
console.log(timestamp)
