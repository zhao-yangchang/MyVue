/*
   interface People{
         function createHead();
         function createBody();
   }
*/
var woman = function (name) { // implements People interface
  this.name = name
}
woman.prototype.showName = function () {
  alert(this.name)
}
woman.prototype.createBody = function () { // 实现必要的方法
  alert('身体已经创建好')
}
woman.prototype.createHead = function () {
  alert('头部已经创建好')
}
