let web3 = require('./start.js')

// 创建钱包
function createAccount () {
  const account = web3.eth.accounts.create('54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534')
  console.log(account)
  return account
}

createAccount()
