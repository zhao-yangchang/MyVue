/**
 *call，apply都属于Function.prototype的一个方法，它是JavaScript引擎内在实现的，因为属于Function.prototype，所以每个Function对象实例(就是每个方法)都有call，apply属性。
 **/
/* 定义一个人类 */
function Person (name, age) {
  this.name = name
  this.age = age
}
/* 定义一个学生类 */
function Student (name, age, grade) {
  Person.apply(this, arguments)
  console.log(this)
  this.grade = grade
}
// 创建一个学生类
var student = new Student('zhangsan', 21, '一年级')
// 测试
console.log('name:' + student.name + '\n' + 'age:' + student.age + '\n' + 'grade:' + student.grade)

setTimeout(function () {
  console.log(this)
}.bind(student), 500)

/**
 * bind作用: 将函数内的this绑定为obj, 并将函数返回
 * 区别bind()与call()和apply(): 都能指定函数中的this
 * call()/apply()是立即调用函数
 * bind()是将函数返回
 **/
function fun (age) {
  this.name = 'kobe'
  this.age = age
  console.log('dddddddddddddd')
}
var obj = {}
console.log(this)
fun.call(obj, 15)
console.log(obj)
console.log(this)
fun.bind(obj, 12)()
console.log(obj) // {name: "kobe", age: 12}
console.log(obj.name, obj.age)
console.log(this)

setTimeout(function () {
  console.log(this) // obj // {name: "kobe", age: 12}
}.bind(obj), 2000)
