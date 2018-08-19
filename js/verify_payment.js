let abi = [{"inputs":[{"name":"_host","type":"address"},{"name":"_minDeposit","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_duration","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"viewer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Payment","type":"event"},{"constant":true,"inputs":[],"name":"pricing","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"closeSession","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payDeposit","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getPeriod","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCollection","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getIsPay","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getHost","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
let bin = "0x608060405234801561001057600080fd5b5060405160808061090c83398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160058190555082600481905550806006819055504260078190555061010f603c826101206401000000000261072b179091906401000000009004565b420160088190555050505050610151565b600081830290506000831480610140575081838281151561013d57fe5b04145b151561014b57600080fd5b92915050565b6107ac806101606000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306f4bcbf146101bb5780631ed24195146101ea5780634251921e1461021c5780635c274b8614610247578063636bfbab146102695780637ce91411146102945780639fba61c7146102bf578063bcd8c9b01461031a578063f6153ccd14610375575b60055434101515156100aa57600080fd5b60006003541115156100bb57600080fd5b61010d34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103a090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610165346009546103a090919063ffffffff16565b6009819055503373ffffffffffffffffffffffffffffffffffffffff167fd4f43975feb89f48dd30cabbb32011045be187d1e11c8ea9faa43efc35282519346040518082815260200191505060405180910390a2005b3480156101c757600080fd5b506101d06103bc565b604051808215151515815260200191505060405180910390f35b3480156101f657600080fd5b506101ff6104fe565b604051808381526020018281526020019250505060405180910390f35b34801561022857600080fd5b5061023161050f565b6040518082815260200191505060405180910390f35b61024f610519565b604051808215151515815260200191505060405180910390f35b34801561027557600080fd5b5061027e6105fa565b6040518082815260200191505060405180910390f35b3480156102a057600080fd5b506102a9610604565b6040518082815260200191505060405180910390f35b3480156102cb57600080fd5b50610300600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061060e565b604051808215151515815260200191505060405180910390f35b34801561032657600080fd5b5061035b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106b6565b604051808215151515815260200191505060405180910390f35b34801561038157600080fd5b5061038a610721565b6040518082815260200191505060405180910390f35b600081830190508281101515156103b657600080fd5b92915050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041a57600080fd5b610442600a6104346009805461072b90919063ffffffff16565b61075c90919063ffffffff16565b9050610459600354826103a090919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104c3573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b600080600754600854915091509091565b6000600954905090565b600080610531600354346103a090919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058f57600080fd5b60045481101515156105a057600080fd5b6105b5346003546103a090919063ffffffff16565b6003819055507f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e38426346040518082815260200191505060405180910390a1600191505090565b6000600454905090565b6000600554905090565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411801561069e5750600554600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b156106ac57600190506106b1565b600090505b919050565b60008173ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610717576001905061071c565b600090505b919050565b6000600354905090565b60008183029050600083148061074b575081838281151561074857fe5b04145b151561075657600080fd5b92915050565b6000808211151561076c57600080fd5b818381151561077757fe5b049050929150505600a165627a7a72305820ce393044d14cc3325f0fbafc15611ae5badaf5ec03c54516451716b335782c0b0029";
let meta_adr = web3.eth.accounts[0];
let contract = web3.eth.contract(abi);
let instance = contract.at('0xf3702ac43225898a30f65b46af98457d0aaedb96');

console.log("address", meta_adr);
console.log("instance", instance);

window.addEventListener('load', function() {
   if (typeof web3 !== 'undefined') {
     console.log('web3 is enabled')
     if (web3.currentProvider.isMetaMask === true) {
       console.log('MetaMask has been install');
       setInterval(function (){
         if (web3.eth.accounts[0]) {
           console.log(web3.eth.accounts[0]);
         } else {
           console.log('User not login');
         }
       }, 1000);
     } else {
       alert('Please install MetaMask plugin to use the function');
     }
   } else {
     console.log('web3 not found');
   }

   $('.play-video').click(handlePlay);

  function handlePlay() {
    console.log("check address", meta_adr);
    instance.getIsPay(meta_adr, function (err, resp) {
      console.log("resp", resp);
      if(!resp) {
        alert('Please pay viewer fee with MetaMask');
      }else{
        alert('Enjoy your show !');
      }
    });
  }
});