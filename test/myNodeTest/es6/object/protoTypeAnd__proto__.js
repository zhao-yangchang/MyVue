/**
 * # prototype 属性和__proto__属性
 *    大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。
 *    ES6 Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
 *        （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 *        （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */
class a {

}

class b extends a {

}

console.log(b.__proto__ === a)
console.log(b.prototype.__proto__ === a.prototype)
// ⬆️上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。

// ⬇️这样的结果是因为，类的继承是按照下面的模式实现的。
class Father {

}

class Child {

}
Object.setPrototypeOf(Child.prototype, Father.prototype)
const child = new Child()
console.log(child)

/**
 * Object.setPrototypeOf方法的实现
 * @param obj
 * @param proto
 * @returns {any}
 */
/* Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto
  return obj
} */

// 可以这样理解：作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例。
