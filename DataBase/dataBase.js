const Realm = require('realm');
console.log('REALM PATH', Realm.defaultPath);
// Define your models and their properties
const WalletSchema = {
    name: 'Wallet',
    properties: {
        name:  'string',
        privateAddress: 'string',
        publicAddress: 'string',
    }
};


export const openWalletDatabase = (walletName, walletPrivateAddress, walletPublicAddress) => {
    return new Promise((resolve, reject) => {
        Realm.open({schema: [WalletSchema]})
            .then(realm => {
                console.log("data base opened ");
                // Create Realm objects and write to local storage
                resolve(realm);
            });
    });
};

