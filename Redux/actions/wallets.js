import * as actionTypes from './actionTypes';
import { openWalletDatabase } from  '../../DataBase/dataBase';
import {AsyncStorage} from 'react-native';

export const createWallet = (walletName, privateAddress, publicAddress) => {
    console.log('createWallet actions');
    return {
                    type: actionTypes.Create_Wallet,
                    walletName: walletName,
                    privateAddress: privateAddress,
                    publicAddress: publicAddress
                }
    // return dispatch => {
        // openWalletDatabase().then((realm) => {
        //     realm.write(() => {
        //         const wallet = realm.create('Wallet', {
        //             name: walletName,
        //             privateAddress: privateAddress,
        //             publicAddress: publicAddress,
        //         });
        //         console.log("wallet added");
        //         console.log(wallet);
        //         dispatch(addWalletToStore(walletName, privateAddress, publicAddress));
        //     });
        // });

    //     dispatch(addWalletToStore(walletName, privateAddress, publicAddress));
    // };

};

export const updateStateFromLocalStorage =  () => {
    return dispatch => {
    console.log("updateStateFromLocalStorage");
    // AsyncStorage.removeItem("state");
    AsyncStorage.getItem('state', (err, result) => {
      console.log(result);
      if(result !== null) {
        console.log("result is not null");
        dispatch( returnUpdateState(result));
       };
    });
    
    // return {
    //       type: actionTypes.Update_State,
    //       state: JSON.parse(temp)          
    //     } 
    };
}

export const returnUpdateState = (result) => {
     return {
              type: actionTypes.Update_State,
              state: JSON.parse(result)          
            }
}

export const addWalletToStore = (walletName, privateAddress, publicAddress) => {
    return {
                    type: actionTypes.Create_Wallet,
                    walletName: walletName,
                    privateAddress: privateAddress,
                    publicAddress: publicAddress
                }
}

export const updateWallets = () => {
    console.log('updateWallets actions');
    return dispatch => {
        // openWalletDatabase().then((realm) => {
        //     const wallets = realm.objects('Wallet');
        //     console.log("realm.objects('wallets')");
        //     console.log(wallets);
        //     dispatch(updateStoreWallets(wallets));
        // });
        
         // dispatch(updateStoreWallets(wallets));
    };

};

const updateStoreWallets = (wallets) => {
    return {
                type: actionTypes.Update_Wallet,
                wallets: wallets
            }
}