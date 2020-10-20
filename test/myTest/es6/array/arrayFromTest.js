// Array.from 方法用于将两类对象转为真正的数组:类似数组的对象(array-likeobject)和可遍历(iterable)的对象(包括ES6 新增的数据结构Set和Map)。
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

let arr = Array.from(arrayLike)
console.log(arr)

let arr2 = Array.from('hello')
console.log(arr2)

let arr3 = Array.from([1, 2, 3], v => v * v)
console.log(arr3)

let arr4 = Array.from({'0': 1, length: 2}, v => v || 'test')
console.log(arr4)
