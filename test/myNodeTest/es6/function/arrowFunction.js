/**
 * ES6允许使用箭头函数（=>）
 */
// const func = x => x
const func = function (x) {
  return x
}

// const func2 = () => 5
const func2 = function () {
  return 5
}

// const func3 = (a, b) => a + b
const func3 = function (a, b) {
  return a + b
}
console.log(func3(1, 2))

// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回。
const func4 = (a, b) => { return a + b }

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
const func5 = (a, b) => ({id: a, name: b})

// 箭头函数可以与变量解构结合使用。
// const func6 = ({first, second}) => first + '' + second
function func6 (person) {
  return person.first + '' + person.second
}

console.log('*************')
// 简化回调函数
// 正常函数
console.log([1, 2, 3].map(function (value) {
  return value * value
}))

// rest参数与箭头函数结合
const numbers = (...nums) => nums
console.log(numbers(1, 2, 3))

const firstAndLast = (first, ...last) => [first, last]
console.log(firstAndLast(1, 2, 3, 4, 5))

/**
 * 注意点：
 *  1、函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
 *  2、不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
 *  3、不可以使用argumnets对象，该对象的函数体内不存在。如果要用，可以用rest参数代替
 *  4、不可以使用yield命令，因此箭头函数不能用作Generator函数
 */
const id = 11
function f () {
  console.log('id:', this.id)
}
f.call({id: 22})

function f1 () {
  setTimeout(() => {
    console.log('id2: ', this.id)
  }, 100)
}
f1.call({id: 22})
f()

/**
 * 箭头函数根本没有自己的this，导致内部的就是外层代码块的this。
 *  arguments  、 super 、 new.target 也没有。
 */
function foo () {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id)
      }
    }
  }
}
// 输出的都是最外层foo的this.id
var f = foo.call({id: 1})
var t1 = f.call({id: 2})()() // id: 1
var t2 = f().call({id: 3})() // id: 1
var t3 = f()().call({id: 4}) // id: 1

/**
 * 嵌套的箭头函数
 */
// 嵌套函数
function insert (value) {
  return {
    into: function (array) {
      return {
        after: function (afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value)
          return array
        }
      }
    }
  }
}

console.log('insert: ', insert(2).into([1, 2]).after(3))

// 箭头函数
const insert2 = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value)
      return array
    }
  })
})

console.log('insert2: ', insert2(2).into([1, 2]).after(3))

const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val)
const plus1 = a => a + 1
const mult2 = a => a * 2
const addThenMult = pipeline(plus1, mult2)
console.log(addThenMult(5))

const pipeline2 = function (...funcs) {
  console.log(funcs)
  return function (func) {
    console.log(func)
    // func = 5,作为初始值传入a
    return funcs.reduce(function (a, b) {
      return b(a)
    }, func)
  }
}

const addThenMult2 = pipeline2(plus1, mult2)

console.log('++++++', addThenMult2(5))
