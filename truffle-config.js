require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
//const privateKeys = process.env.PRIVATE_KEYS;
const mnemonicPhrase = process.env.MNEMONIC;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: () => new HDWalletProvider({
                mnemonic: {
                    phrase: mnemonicPhrase
                },
                providerOrUrl: `wss://ropsten.infura.io/ws/v3/${process.env.INFURA_API_KEY}`,
                numberOfAddresses: 1,
                shareNonce: true,
                derivationPath: "m/44'/1'/0'/0/"
            }),
            network_id: 3,
            //gas: 5500000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}