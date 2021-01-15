let util = require('ethereumjs-util')
let web3 = require('./start')
let utils = require('./utils')
let account = require('../../config/web3/defaultConfig')

function sendTransaction () {
  const privateKey = account.privateKey
  const rawTx = {
    nonce: '0x00',
    gas: utils.toHex('21004'),
    gasPrice: '0x09184e72a000',
    gasLimit: utils.toHex(utils.toWei('21004', 'wei')),
    to: '0x1c09915763eefe84669b1c3ffd3e2a1f0081b93b',
    value: '0x00',
    data: '0x00'
  }
  console.log('交易数据为：', rawTx)

  /*const tx = new Tx(rawTx)
  tx.sign(privateKey)*/

  web3.eth.accounts.signTransaction(rawTx, privateKey).then(tx => {
    console.log(tx)
    web3.eth.sendSignedTransaction(tx.rawTransaction, (error, hash) => {
      if (!error) {
        console.log(hash)
      } else {
        console.log(error)
      }
    })
  })
}

sendTransaction()
