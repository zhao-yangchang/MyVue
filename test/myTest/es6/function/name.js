/**
 * 函数的 name 属性，返回该函数的函数名。
 * 如果将一个匿名函数赋值给一个变量，ES5的 name 属性，会返回空 字符串，而ES6的 name 属性会返回实际的函数名。
 */

function foo () {

}

console.log(foo.name)

// ES5和ES6区别
const func = function () {

}
console.log(func.name)

// 构造函数返回的函数实例，name属性的值为 anonymous
console.log((new Function()).name)

// bind 返回的函数， name 属性值会加上“bound”前缀。
console.log(foo.bind({}).name)

console.log((function(){}).bind({}).name)
