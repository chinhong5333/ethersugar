var EtherSugar = artifacts.require("./Ethersugar.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherSugar);
};