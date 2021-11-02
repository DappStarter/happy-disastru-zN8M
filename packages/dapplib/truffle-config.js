require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone cruise snow common inner neck equal gate'; 
let testAccounts = [
"0x9e8158d49966498750ef77012ecfeada6005a6602dbef4c453750f3038c05f68",
"0x7495f4d40d97667a54c0e64b9c18fc3567f2541125282fdf273b8bc397f2ca8b",
"0x9c27cf2343b595ccb8414a07d8196f0218097d3ee93365dff5b31af382cad92e",
"0xddb61b6ca9fb4d7785f9d33b65aa786c91f13c12a4a7949bccbe2729e838643e",
"0x959f0e5742561998b973174c182537c5c149b5454ae1cfed845d917e6a5c25f5",
"0xacbd67386918b53356381f43bb90f643a4dfe2346f3533b43375b2a7b014703b",
"0x833d07f68d1bc3593dd4fdf595abc40613105378bbe8ef60b8cda6fdb65b323a",
"0x9e17f4c6a789d1ce540af4f5a0de3aaf644f6f45716766092680fda71c540ea2",
"0x25dd57db731ed3c62b28d09134958b5fe0ba1c460d7a701bc3401cc4a1ebc89f",
"0xf2f67bd98a239fccb92ed42c69b3c13ec33b61c07c248eadd0282877a9a86379"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


