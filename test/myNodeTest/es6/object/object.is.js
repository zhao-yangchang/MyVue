/**
 * ES5比较两个值是否相等，只有两个运算符:
 *  相等运算符( == )和严格相等运算符( === )。
 *  它们都有缺点，前者会自动 转换数据类型，后者的 NaN 不等于自身，以及 +0 等于 -0 。
 * JavaScript缺乏一种运算，在所有环境中，只要两个值是一样 的，它们就应该相等。
 */
/**
 * ES6提出“Same-valueequality”(同值相等)算法，用来解决这个问题。
 * Object.is 就是部署这个算法的新方法。它用来比较两 个值是否严格相等，与严格比较运算符(===)的行为基本一致。
 */
console.log(Object.is('foo', 'foo'))
console.log(Object.is({}, {}))

// 不同之处只有两个:一是 +0 不等于 -0 ，二是 NaN 等于自身。
console.log(+0 === -0)
console.log(Object.is(+0, -0))

console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))

// ES5可以通过下面的代码，部署 Object.is
Object.defineProperty(Object, 'is', {
  value: function (x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y
    }
    // 针对NaN的情况
    return x !== x && y !== y
  },
  configurable: true,
  enumerable: false,
  writable: false
})
