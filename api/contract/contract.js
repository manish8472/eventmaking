const ABI = require("../ABI.json");
const {Web3} = require("web3");

const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/II3jfCYp477k_UviQjYkCXDE3fb1LZx0")

const contractAddress = "0xa2e39bf05b0064bea8981f92930e0e10ffdc29c8"
const contract = new web3.eth.Contract(ABI, contractAddress);

module.exports={contract}