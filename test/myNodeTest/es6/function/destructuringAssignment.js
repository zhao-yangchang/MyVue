/**
 * 函数默认值和解构赋值的默认值结合
 */
function foo ({ x, y = 5 }) {
  console.log(x, y)
}

foo({ x: 1 })
foo({ x: 1, y: 10 })
foo({})
/*foo()*/

function fetch (url, { body = '', method = 'GET', headers = {} }) {
  console.log(method)
}

fetch('http://baidu.com', {})
/*fetch('http://baidu.com')*/

function fetch2 (url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method)
}

fetch2()

/**
 * m1和m2区别：
 *  写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值;
 *  写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
 * @param x
 * @param y
 * @returns {number[]}
 */
function m1 ({ x = 0, y = 0 } = {}) {
  return [x, y]
}

function m2 ({ x, y } = { x: 0, y: 0 }) {
  return [x, y]
}

console.log(m1())
console.log(m2())

console.log(m1({ x: 3, y: 8 }))
console.log(m2({ x: 3, y: 8 }))

console.log(m1({ x: 3 }))
console.log(m2({ x: 3 }))

console.log(m1({}))
console.log(m2({}))

console.log(m1({ z: 3 }))
console.log(m2({ z: 3 }))
