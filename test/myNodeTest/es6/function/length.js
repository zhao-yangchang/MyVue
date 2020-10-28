/**
 * 函数的length属性含义：
 *  返回没有指定默认值的参数个数（该函数预期传入的参数个数）
 *  某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。
 *  同理，rest参数也不会计入 length 属性。
 *  如果设置了默认值的参数不是尾参数，那么 length 属性也不再计入后面的参数了。
 */
console.log((function (a) {}).length)
console.log((function (a = 5) {

}).length)
console.log((function (a, b, c = 5) {

}).length)
console.log((function (...args) {

}).length)

console.log((function (a = 0, b, c) {

}).length)
console.log((function (a, b, c = 0) {

}).length)
