/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas : 4612388
    },

    ropsten:  {
      network_id: 3,
      host: "localhost",
      port:  8545,
      gas:   2900000,
      from: "0xF91b1Ecdfa09d84D928bc6A8E9f57859CCB0E544"
    }
  }
};
