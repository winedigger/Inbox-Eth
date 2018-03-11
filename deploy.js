const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode}= require('./compile');

const provider = new HDWalletProvider('flat rapid unusual fat trade rabbit general put dragon fan neutral cake',
 'https://rinkeby.infura.io/v4OivtFVj6OFBGaISFV6');
const web3 = new Web3(provider);

const deploy = async () => {

const accounts = await web3.eth.getAccounts();
console.log('attempting to deploy from account', accounts[0]);
await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: bytecode, arguments: ['Hi there !']})
.send({gas: '1000000', from: accounts[0]});

console.log('Contracts deployed to ', result.options.address);
};
deploy();

