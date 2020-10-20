// Array.of 方法用于将一组值，转换为数组。
let arr = Array.of(3, 11, 18)
console.log(arr)

// Array.of和Array差异
let arr2 = Array.of(3)
console.log(arr2) // [ 3 ]
let arr3 = Array(3)
console.log(arr3) // [ <3 empty items> ]

// array参数不同，结果不同
let arr4 = Array()
console.log(arr4)
let arr5 = Array(3)
console.log(arr5)
let arr6 = Array(3, 11, 18)
console.log(arr6)
