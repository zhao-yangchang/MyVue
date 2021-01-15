// 初始化过程
var Web3 = require('web3')

let web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  // set the provider you want from Web3.providers
  // rinkeby测试链地址
  // web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/35a1bc03e45e4a56917ab07fd832b362'))
  // ropsten测试链地址
  web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/35a1bc03e45e4a56917ab07fd832b362'))
  // web3 = new Web3(new Web3.providers.HttpProvider('https://etherscan.io/'))
}

// 设置默认地址
console.log('Current default: ' + web3.eth.defaultAccount)
// web3.eth.defaultAccount = '0x8888f1f195afa192cfee860698584c030f4c9db1'
// zkswap测试链合约地址 ：0x1c09915763eefe84669b1c3ffd3e2a1f0081b93b

console.log('Current default: ' + web3.eth.defaultAccount)

// 设置Provider
// web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))
// 默认地址
console.log('默认地址:', web3.eth.defaultBlock)
// 默认区块
console.log('默认地址:', web3.eth.defaultBlock)

module.exports = web3
