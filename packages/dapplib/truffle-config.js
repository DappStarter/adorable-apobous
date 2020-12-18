require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain come hunt beach tail town'; 
let testAccounts = [
"0x048122a34a5eeacea1d950c0acdc52c92c1bd20c404c6057473333da0f2142ad",
"0x18a6ab4f83ea2c7db6a6d441835f8793ab55c90663c4d7762d429f01a37cd15a",
"0x4220276fcad53ee61b843f5dcd794cac95afcc29a622241b92ae517c977dd172",
"0xfa2ef50eaa046e6f13ccb77e17cd662185d1d97c1670498864520f372a6a53f4",
"0x0d856a7d04387213c9c9dc6d6388334baa0ad50a18c2b937e5e451baed4ea2a9",
"0x5f2f1b1731f6daa1bda26de76a4ab59710cf603fb12e036700637b6c56a903b7",
"0x6c81f3d320e648ec7b40347e9e65a0e8f8dfad531a7a0bc7ef325b58ececdab4",
"0xd4babc98ac32ed00ee6f23d8c5afa0b30bc28bdc782b69c7a2c67088e1ad8782",
"0x97b70605623d1627e07fd24971bfc807301d213dd29e4d14c5e7702e6ffd7d6c",
"0x64b0a75b2f5a2b24014ebc509199d931396bb7b98a0b0dcf9161bcee33dfd649"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
