// 数组实例的 copyWithin 方法，在当前数组内部，将指定位置的成员复制到其他位置(会覆盖原有成员)，然后返回当前数 组。
// 也就是说，使用这个方法，会修改当前数组。
let arr = [1, 2, 3, 4, 5].copyWithin(0, 3)
console.log(arr)
let arr2 = [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
console.log(arr2)
let arr3 = [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
console.log(arr3)
let arr4 = [1, 2, 3, 4, 5].copyWithin(0, -2)
console.log(arr4)

let arr5 = [].copyWithin.call({length: 5, 3: 1}, 0, 3)
console.log(arr5)

let arr6 = [ {length: 5, 3: 1} ].copyWithin(0, 3)
console.log(arr6)

let arr7 = [ {0: undefined, 1: undefined, 2: undefined, 3: 1, 4: undefined, 5: undefined} ].copyWithin(0, 3)
console.log(arr7)

console.log('*******')
console.log([, 'a', 'b',, ].copyWithin(2, 0))
