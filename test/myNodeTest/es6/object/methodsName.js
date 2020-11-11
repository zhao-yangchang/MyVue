/**
 * 函数的 name 属性，返回函数名。对象方法也是函数，因此也有 name 属性。
 */
const person = {
  'name': 'zhaoyc',
  sayName () {
    console.log(this.name)
  },
  get getName () {
    return 'zhaoyangchang'
  }
}
person.sayName()
console.log(person.sayName.name)
console.log(person.getName)
console.log(person.getName.name)

/**
 * 方法的 name 属性返回函数名(即方法名)。如果使用了取值函数，则会在方法名前加上 get 。如果是存值函数，方法名的前面会加上 set 。
 */
/**
 * ⬇️有两种特殊情况:
 *  bind 方法创造的函数， name 属性返回“bound”加上原函数的名字;
 *  Function 构造函数创造的函数， name 属性返回“anonymous”。
 */

console.log(new Function().name)

const doSomething = function () {
  return 'zhaoyc'
}

console.log(doSomething.bind().name)

/**
 * 如果对象的方法是一个Symbol值，那么 name 属性返回的是这个Symbol值的描述。
 */
const key1 = Symbol('description')
const key2 = Symbol()
const obj = {
  [key1] () {},
  [key2] () {}
}
console.log(obj[key1])
console.log(obj[key1].name)
console.log(obj[key2])
console.log(obj[key2].name)
