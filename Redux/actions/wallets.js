import * as actionTypes from './actionTypes';
import { openWalletDatabase } from  '../../DataBase/dataBase';

export const createWallet = (walletName, privateAddress, publicAddress) => {
    console.log('createWallet actions');
    return dispatch => {
        openWalletDatabase().then((realm) => {
            realm.write(() => {
                const wallet = realm.create('Wallet', {
                    name: walletName,
                    privateAddress: privateAddress,
                    publicAddress: publicAddress,
                });
                console.log("wallet added");
                console.log(wallet);
                dispatch(addWalletToStore(walletName, privateAddress, publicAddress));
            });
        });
    };

};

const addWalletToStore = (walletName, privateAddress, publicAddress) => {
    return {
                    type: actionTypes.Create_Wallet,
                    walletName: walletName,
                    privateAddress: privateAddress,
                    publicAddress: publicAddress
                }
}

export const updateWallets = () => {
    console.log('getWallets actions');
    return dispatch => {
        openWalletDatabase().then((realm) => {
            const wallets = realm.objects('Wallet');
            console.log("realm.objects('wallets')");
            console.log(wallets);
            dispatch(updateStoreWallets(wallets));
        });
    };

};

const updateStoreWallets = (wallets) => {
    return {
                type: actionTypes.Update_Wallet,
                wallets: wallets
            }
}