/**
 * 1、__proto__属性
 *    读取或设置当前对象的 prototype 对象
 *    注：无论从语义的角度，还是从兼容性的角度，都不要使 用这个属性，而是使用下面的
 *       Object.setPrototypeOf() (写操作)、 Object.getPrototypeOf() (读操作)、 Object.create() (生成操作)代替。
 */
console.log(Object.getPrototypeOf({__proto__: null}))

/**
 * 2、Object.setPrototypeOf()
 *    Object.setPrototypeOf 方法的作用与 __proto__ 相同，用来设置一个对象的 prototype 对象。它是ES6正式推荐的设置 原型对象的方法。
 */
const example = Object.setPrototypeOf({}, null)
console.log(example)

// Object.setPrototypeof 等同于
function same (obj, proto) {
  obj.__proto__ = proto
  return obj
}

// 例子
let proto = {}
let obj = { x: 10 }
Object.setPrototypeOf(obj, proto)
proto.y = 20
proto.z = 30

console.log(obj.__proto__)
console.log(obj.y)
// ⬆️将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。

/**
 * 3、Object.getPrototypeOf()
 *    与setPrototypeOf方法配套，用于读取一个对象的prototype对象。
 *    Object.getPrototypeOf(obj)
 */
function Rectangle () {

}

const rec = new Rectangle()
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)

console.log(Rectangle.prototype)
Object.setPrototypeOf(rec, Object.prototype)
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)
