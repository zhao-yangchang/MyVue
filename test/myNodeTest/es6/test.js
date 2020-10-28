/* for (var i = 1; i <= 3; i++) {
  setTimeout(function () { console.log(i) }, 0)
};

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} */

/* function f () {
  let i = 1
  for (i; i <= 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0)
  }

}

console.log(f()) */

function f () {
  this.user = 'this测试'
  return undefined
}

var j = new f()
console.log(j)

var People = function () {
  var name = '张三' // 局部变量
  var age = 24

  this.getname = function () { // 局部方法
    console.log(this.name)
    return name
  }
}
var p1 = new People()
console.log(p1.name)

// 模块模式
function fn () {
  const a = 1
  function doSomething () {
    console.log(a)
  }
  return {
    doSomething
  }
}
const foo = fn()
console.log(foo.doSomething())

// 函数柯里化
function curry (fn) {
  console.log(fn)
  const args = [...arguments].slice(1)
  return function () {
    const innerArgs = [...arguments]
    const finnalArgs = args.concat(innerArgs)
    return fn.apply(null, finnalArgs)
  }
}
function add (n1, n2) {
  return n1 + n2
}
curry(add, 5)(3)// 8

// for循环
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j)
    }, j * 1000)
  })(i)
}

function addCalculator (x) {
  return function (y) {
    return x + y
  }
}

var add1 = addCalculator(1)(3)
console.log(add1) // 2

