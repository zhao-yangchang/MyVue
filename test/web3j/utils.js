let web3 = require('./start.js')
let test = ''
let amount = '0'

// 将任何值转为HEX
function toHex (param) {
  if (!param) {
    // 测试
    test = 'test'
    console.log(test, '转换为HEX：', web3.utils.toHex(test))
  } else {
    console.log(param, '转换为HEX：', web3.utils.toHex(param))
    return web3.utils.toHex(param)
  }
}

// 将HEX字符串转换为ASCII字符出
function toAscii (param) {
  if (!param) {
    // 测试ethereum
    test = '0x657468657265756d'
    console.log(test, '转换为ASCII：', web3.utils.toAscii(test))
  } else {
    console.log(param, '转换为ASCII：', web3.utils.toAscii(param).trim())
  }
}

// 将任何的ASCII码字符串转为HEX字符串
function fromAscii (param) {
  if (!param) {
    test = 'ethereum'
    console.log(test, '从ASCII转换为HEX：', web3.utils.fromAscii(test))
  }
}

// 将一个十六进制转为十进制
function toDecimal (param) {
  if (!param) {
    test = '0x15'
    console.log(test, '转为十进制：', web3.utils.toDecimal(test))
  }
}

// 将数字或字符串形式的数字转为十六进制串
function fromDecimal (param) {
  if (!param) {
    test = '21'
    console.log(test, '转为十六进制：', web3.utils.fromDecimal(test))
  }
}

// 以太坊货币单位之间转换,将以wei为单位的数量转为其他单位
function fromWei (pairs, unit) {
  if (!unit && !pairs) {
    amount = '100000'
    test = 'finney'
    console.log(amount, 'wei转为', test, '为：', web3.utils.fromWei(amount, test))
  } else {
    return web3.utils.fromWei(amount, test)
  }
}

// 将对应货币转为wei为单位
function toWei (pairs, unit) {
  if (!unit) {
    amount = '100000'
    test = 'finney'
    console.log(amount, test, '转为wei为：', web3.utils.toWei(amount, test))
  } else {
    return web3.utils.toWei(pairs, unit)
  }
}

// 将给定的数字或十六进制字符串转为bigNumber
function toBigNumber (param) {
  if (!param) {
    amount = '200000001'
    console.log(amount, '转为BigNumber为：', web3.utils.toBN(amount))
  }
}

toHex()
toAscii()
fromAscii()
toDecimal()
fromDecimal()
fromWei()
toWei()
toBigNumber()

module.exports = {
  fromWei,
  toWei,
  toHex
}
