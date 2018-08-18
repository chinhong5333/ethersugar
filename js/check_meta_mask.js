$(document).ready(function(){
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
         // web3.eth.getAccounts(function(err, accounts){
         //   if (err != null) alert('An error occurred: '+err);
         //   else if (accounts.length == 0) console.log('User not logged in to MetaMask');
         //   else console.log('User logged in to MetaMask');
         // });
       }, 1000);
     } else {
       alert('Please install MetaMask plugin to use the function');
     }
   } else {
     console.log('web3 not found');
   }
  });

  $('#contact_form_host').click(hostLive);

  function hostLive() {
    if (!web3.eth.accounts[0]) {
      alert("Please login with MetaMask");
      return false;
    }

    // TODO: Create / deploy new smart contract address
    let abi = [{"inputs":[{"name":"_host","type":"address"},{"name":"_minDeposit","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_duration","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"viewer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Payment","type":"event"},{"constant":true,"inputs":[],"name":"pricing","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"closeSession","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payDeposit","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getPeriod","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCollection","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getIsPay","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
    let bin = "0x608060405234801561001057600080fd5b5060405160808061083b83398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160058190555082600481905550806006819055504260078190555061010f603c826101206401000000000261065a179091906401000000009004565b420160088190555050505050610151565b600081830290506000831480610140575081838281151561013d57fe5b04145b151561014b57600080fd5b92915050565b6106db806101606000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306f4bcbf146101b05780631ed24195146101df5780634251921e146102115780635c274b861461023c578063636bfbab1461025e5780637ce91411146102895780639fba61c7146102b4578063f6153ccd1461030f575b600554341015151561009f57600080fd5b60006003541115156100b057600080fd5b61010234600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461033a90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061015a3460095461033a90919063ffffffff16565b6009819055503373ffffffffffffffffffffffffffffffffffffffff167fd4f43975feb89f48dd30cabbb32011045be187d1e11c8ea9faa43efc35282519346040518082815260200191505060405180910390a2005b3480156101bc57600080fd5b506101c5610356565b604051808215151515815260200191505060405180910390f35b3480156101eb57600080fd5b506101f4610498565b604051808381526020018281526020019250505060405180910390f35b34801561021d57600080fd5b506102266104a9565b6040518082815260200191505060405180910390f35b6102446104b3565b604051808215151515815260200191505060405180910390f35b34801561026a57600080fd5b50610273610594565b6040518082815260200191505060405180910390f35b34801561029557600080fd5b5061029e61059e565b6040518082815260200191505060405180910390f35b3480156102c057600080fd5b506102f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105a8565b604051808215151515815260200191505060405180910390f35b34801561031b57600080fd5b50610324610650565b6040518082815260200191505060405180910390f35b6000818301905082811015151561035057600080fd5b92915050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103b457600080fd5b6103dc600a6103ce6009805461065a90919063ffffffff16565b61068b90919063ffffffff16565b90506103f36003548261033a90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561045d573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b600080600754600854915091509091565b6000600954905090565b6000806104cb6003543461033a90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561052957600080fd5b600454811015151561053a57600080fd5b61054f3460035461033a90919063ffffffff16565b6003819055507f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e38426346040518082815260200191505060405180910390a1600191505090565b6000600454905090565b6000600554905090565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541180156106385750600554600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b15610646576001905061064b565b600090505b919050565b6000600354905090565b60008183029050600083148061067a575081838281151561067757fe5b04145b151561068557600080fd5b92915050565b6000808211151561069b57600080fd5b81838115156106a657fe5b049050929150505600a165627a7a723058205055dee40ce26b162ed3c23f02dfc6b95b1be216ade6aae3ae869657b088a8100029";

    let meta_adr = web3.eth.accounts[0];
    let contract = web3.eth.contract(abi);
    let cData    = contract.new(meta_adr, window.web3.toWei("0.0001", "ether"),window.web3.toWei("0.0001", "ether"), 10, {
      from : meta_adr,
      gas  : 1000000,
      data : bin
    }, function (err, myContract) {
      if(!err) {
       if(!myContract.address) {
         console.log("tx pending", myContract.transactionHash)
       } else {
         console.log("confirmed", myContract.address, myContract)
         window.location.href = "/ethersugar/live_host.html?contract=" + myContract.address;
       }
      }else{
        console.log("ERR", err);
      }
    });
    console.log("deployed:", cData);
  };
});