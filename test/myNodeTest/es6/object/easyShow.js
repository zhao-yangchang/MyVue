/**
 * ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
 */
const foo = 'bar'
const baz = {foo}
console.log(baz)

const baz2 = {foo: foo}
console.log(baz2)

const foo2 = x => x
const baz3 = {foo2}
console.log(baz3)

function f (x, y) {
  return { x, y }
}

// 等同于
function f1 (x, y) {
  return {x: x, y: y}
}

console.log(f(1, 2))
console.log(f1(3, 4))

/**
 * 除了属性简写，方法也可以简写。
 */
const o = {
  method () {
    return 'hello'
  }
}

// 等同于
const o1 = {
  method: function () {
    return 'hello'
  }
}

console.log('o.method:', o.method)
console.log('o.method():', o.method())
console.log('o1.method:', o1.method)
console.log('o1.method():', o1.method())

const birth = '2000-10-01'
const person = {
  name: 'zhangsan',
  birth,
  hello () {
    console.log('my name is: ', this.name)
  }
}
person.hello()
console.log(person.birth)

function getPoint () {
  let x = 1
  let y = 10
  return {x, y}
}

console.log(getPoint())

let ms = {}

function getItem (key) {
  return key in ms ? ms[key] : null
}

function setItem (key, value) {
  ms[key] = value
}

function clear () {
  ms = {}
}

module.exports = {
  getItem,
  setItem,
  clear
}

// 等同于
module.exports = {
  getItem: getItem(),
  setItem: setItem(),
  clear: clear()
}

/**
 * ES5中对象的属性可以分为‘数据属性’和‘访问器属性’两种。数据属性一般用于存储数据数值，访问器属性对应的是set/get操作，不能直接存储数据值。
 *  数据属性特性：value、writable、enumerable、configurable。
 *    configurable：true/false，是否可以通过delete删除属性，能否修改属性的特性，能否把属性修改为访问器属性，默认false；
 *    enumerable：true/false，是否可以通过for in循环返回，默认false；
 *    writable：true/false，是否可以修改属性的值，默认false；
 *    value：undefined，设置属性的值，默认undefined。
 *  访问器属性特性：set、get、enumerable、configurable。
 *    configurable：true/false，是否可以通过delete删除属性，能否修改属性的特性，能否把属性修改为访问器属性，默认false；
 *    enumerable：true/false，是否可以通过for in循环返回，默认false；
 *    set：function，读取属性值时调用的函数；
 *    get：function，修改属性值时调用的函数。
 */
/**
 * 将属性添加到对象或修改现有属性的特性使用Object.defineProperty() 或 Object.defineproperties()方法;
 *  Object.defineProperty(object, propertyname, descriptor):
 *  参数解释：
 *    object：需要添加或修改属性的对象；
 *    propertyname：属性的名称，字符串格式；
 *    descriptor：属性的描述，设置数据属性或访问器属性的特性。
 */
/**
 * 属性的赋值器(setter)和取值器(getter)同上⬆️
 */
const cart = {
  _wheels: 4,
  get: function () {
    return this._wheels
  },
  set: function (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了!')
    }
    this._wheels = value
  }
}

Object.defineProperty(cart, '_wheels', {
  writable: false
})
cart.set(5)
console.log(cart.get())

// 等同于
const cart2 = {
  _wheels: 4,
  get wheels () {
    return this._wheels
  },
  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了!')
    }
    this._wheels = value
  }
}

console.log('cart2: ', cart2.wheels)
cart2.wheels(6)
console.log(cart2.wheels)
