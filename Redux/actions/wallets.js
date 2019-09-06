import * as actionTypes from './actionTypes';
// import { openWalletDatabase } from  '../../DataBase/dataBase';
import {AsyncStorage} from 'react-native';

export const addWallet = (walletName, privateAddress, publicAddress, value) => {
    console.log('addWallet actions');
    return {
                    type: actionTypes.Add_Wallet,
                    walletName: walletName,
                    privateAddress: privateAddress,
                    publicAddress: publicAddress,
                    value: value
    }
};

export const addTransaction = (transactionType, sender, receiver, value, status) => {
    console.log('addTransaction actions');
    return {
                    type: actionTypes.Add_Transaction,
                    transactionType: transactionType,
                    sender: sender,
                    receiver: receiver,
                    value: value,
                    status: status
    }
};

export const checkStorage = () => {
    console.log('checkStorage actions');
    return dispatch => {
     AsyncStorage.getItem('state').then((value) => {
        console.log("AsyncStorage state");
        console.log(value);
        if(value !== null) {
           if(isJsonString(value)) {
              dispatch(setStore(JSON.parse(value)));
           } 
        } 
     });
   };
};

export const setStore = (store) => {
    console.log('setStore actions');
    console.log(store);
    return {
             type: actionTypes.Set_Store, 
             store: store                  
    }
};

export const setActiveWallet = (walletName) => {
    console.log('setActiveWallet actions');
    console.log(walletName);
    return {
             type: actionTypes.Set_Active_Wallet, 
             walletName: walletName                  
    }
};

const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
