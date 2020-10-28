/**
 * 函数实际上是对象：它们能被“存储”在变量中，能作为函数参数被传递，能在函数中被创建，能从函数中返回;
 * 当我们将一个回调函数作为参数传递给另一个函数是，我们仅仅传递了函数定义。我们并没有在参数中执行函数。
 * 我们并不传递像我们平时执行函数一样带有一对执行小括号()的函数。
 * ***
 * 需要注意的很重要的一点是回调函数并不会马上被执行。它会在包含它的函数内的某个特定时间点被“回调”（就像它的名字一样）
 * ***
 **/

// 实现原理：使用命名函数或匿名函数作为回调
// 匿名函数：使用了参数位置定义的匿名函数作为回调函数
// 命名函数：定义一个命名函数并将函数名作为变量传递给函数

// 匿名函数调用
function getInput (array, callback) {
  const arr = []
  arr.push(array)
  callback('匿名函数回调', arr)
}

getInput({name: 'zhaoyc', age: 26}, function (type, arr) {
  console.log(type + ':' + arr[0].name)
})

// 命名函数调用
function getInput2 (array, callback) {
  const arr = []
  arr.push(array)
  callback('命名函数回调', arr)
}

getInput2({name: 'zhaoyc'}, call)

function call (type, arr) {
  console.log(type + ':' + arr[0].name)
}
