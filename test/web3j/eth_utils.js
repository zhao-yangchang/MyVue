let web3 = require('./start.js')
let utils = require('./utils')
let defaultConfig = require('../../config/web3/defaultConfig')

function logEth () {
  console.log(web3.eth.defaultAccount)
}

function getGas () {
  web3.eth.getGasPrice((error, gasPrice) => {
    if (error) {
      console.log('获取Gas失败:', error)
      return
    }
    console.log(web3.utils.fromWei(gasPrice, 'gwei'))
  })
}

// 当前每秒的哈希难度
async function hashRate () {
  console.log(await web3.eth.getHashrate())
}

// 当前区块号
async function blockNumber () {
  console.log(await web3.eth.getBlockNumber())
}

// 获得制定区块时给定地址的余额
async function getBalance (address) {
  if (!address) {

  } else {
    console.log(address, '余额：', utils.fromWei(await web3.eth.getBalance(address), 'ether'))
    return utils.fromWei(await web3.eth.getBalance(address), 'ether')
  }
}

// 返回匹配指定交易哈希值的交易
function getTransaction (hash) {
  // console.log(hash, '对应的交易：', JSON.stringify(web3.eth.getTransaction(hash)))
  web3.eth.getTransaction(hash).then(resp => {
    console.log(hash, '对应的交易：', resp)
    console.log(utils.fromWei(resp.value, 'ether'))
  })
}

// 通过交易哈希返回交易的收据
function getTransactionReceipt (hash) {
  if (hash) {
    web3.eth.getTransactionReceipt(hash).then(resp => {
      console.log(hash, '交易收据：', resp)
      return resp
    })
  }
}

logEth()
getGas()
hashRate()
blockNumber()
getBalance(defaultConfig.address)
getTransaction('0x0de6105f99c8d0399e2104c590de045c8f23fd06ea15f24703a7be3a8aef763d')
getTransactionReceipt('0x0de6105f99c8d0399e2104c590de045c8f23fd06ea15f24703a7be3a8aef763d')

module.exports = {
  getBalance
}
