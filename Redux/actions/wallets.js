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

export const addTransaction = (transactionType, from, to, value) => {
    console.log('addTransaction actions');
    return {
                    type: actionTypes.Add_Transaction,
                    transactionType: transactionType,
                    from: from,
                    to: to,
                    value: value
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
    return {
             type: actionTypes.Set_Store, 
             store: store                  
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
