/**
 * 对象的每个属性都有一个描述对象(Descriptor)，用来控制该属性的行为。 Object.getOwnPropertyDescriptor 方法可以获 取该属性的描述对象。
 */
let obj = {
  foo: 123,
  length: 1
}
console.log(Object.getOwnPropertyDescriptor(obj, 'length'))

let array = [obj]
console.log(Object.getOwnPropertyDescriptor(array, 'length'))
for (let param of Object) {
  console.log(param)
}

/**
 * 描述对象的 enumerable 属性，称为”可枚举性“，如果该属性为 false ，就表示某些操作会忽略当前属性。
 * ES5有三个操作会忽略 enumerable 为 false 的属性。
 *  for...in 循环:         只遍历对象自身的和继承的可枚举的属性
 *  Object.keys():        返回对象自身的所有可枚举的属性的键名
 *  JSON.stringify():     只串行化对象自身的可枚举的属性
 * ES6新增了两个操作，会忽略 enumerable 为 false 的属性。
 *  Object.assign():      只拷贝对象自身的可枚举的属性
 *  Reflect.enumerate():  返回所有 for...in 循环会遍历的属性
 */
