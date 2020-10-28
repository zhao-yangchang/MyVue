/**
 * 拓展运算符的应用
 * 1、合并数组
 * 2、解构赋值
 * 3、函数返回值
 * 4、字符串
 * 5、实现了iterator接口的对象
 * 6、map和set结构，generator函数
 */
// 1、合并数组
// ES5
console.log([1, 2].concat([3, 4]))
console.log(['a', 'b'].concat(['c', 'd'], ['e', 'f']))

// ES6
console.log([1, 2, ...[3, 4]])
console.log([...['a', 'b'], ...['c', 'd'], ...['e', 'f']])

// 2、与解构赋值结合
const arr = ['a', 'b', 'c', 'd', 'e']
// ES5
let a = arr[0]
const b = arr.slice(1)
console.log(a)
console.log(b)

// ES6
const [a1, ...b1] = arr
console.log(a1)
console.log(b1)

// 其他例子
const [first, ...rest] = []
console.log(first, rest)

const [first2, ...rest2] = ['foo']
console.log(first2, rest2)

/**
 * 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
 */
/*
const [a2 , ...b2, c2] = arr
console.log(a2, b2, c2)
*/

// 3、函数的返回值

// 4、字符串
console.log([...'hello'])
/**
 * 第一种写法，JavaScript会将32位Unicode字符，识别为2个字符;
 * 采用扩展运算符就没有这个问题
 */
console.log('x\uD83D\uDE80y'.length)
console.log([...'x\uD83D\uDE80y'].length)
