/**
 * 在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
 * @param x
 * @param y
 * 缺点：
 *    如果参数 y 赋 值了，但是对应的布尔值为 false ，则该赋值不起作用。
 */
function log (x, y) {
  y = y || 'World'
  console.log(x, y)
}
log('Hello')
log('Hello', 'China')
log('Hello', '')

function log2 (x, y) {
  if (typeof y === 'undefined') {
    y = 'World'
  }
  console.log(x, y)
}

log2('Hello', '')

/**
 * ES6 写法
 */
function log3 (x, y = 'World') {
  console.log(x, y)
}

log3('Hello', '')

function point (x = 0, y = 0) {
  this.x = x
  this.y = y
}

const p = new point()
console.log(p)

/**
 * 除了简洁，ES6的写法还有两个好处:
 *  首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文 档;
 *  其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。
 */
