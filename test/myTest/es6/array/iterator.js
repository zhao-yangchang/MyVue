/**
 *  entries(), keys(), vlaues()
 *  for ... of 循环遍历
 **/
for (let index of ['a', 'b'].keys()) {
  console.log(index)
}

for (let map of ['a', 'b'].entries()) {
  console.log(map[0], map[1])
}

/*for (let elem of ['a', 'b'].values()) {
  console.log(elem)
}*/

/**
 * 遍历器对象next方法
 **/
let list = ['a', 'b', 'c']
let entries = list.entries()
console.log(entries.next())
console.log(entries.next())
console.log(entries.next())
