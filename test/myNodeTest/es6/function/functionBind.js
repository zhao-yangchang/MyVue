/**
 * 箭头函数可以绑定 this 对象，大大减少了显式绑定 this 对象的写法( call 、 apply  、 bind  )。
 * 但是，箭头函数并 不适用于所有场合，所以ES7提出了“函数绑定”(function bind)运算符，用来取代   call、   apply、bind 调用。
 */
/**
 * 函数绑定运算符是并排的两个双冒号(::)，双冒号左边是一个对象，右边是一个函数。
 * 该运算符会自动将左边的对象，作为上 下文环境(即this对象)，绑定到右边的函数上面。
 */
function f () {
  this.user = 'f'
}
const ff = new f()
function a () {
  console.log(this.user)
}
ff::a
