import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {AsyncStorage} from 'react-native';

const initialState = {
    wallets: [],
    loading: false,
    error: '',
    transactions: [],
    activeWallet: ''
};

const addWallet = (state, action) => {
    let temp = state.wallets;
    temp.push({walletName: action.walletName, privateAddress: action.privateAddress, 
        publicAddress: action.publicAddress, value: action.value });
    console.log("addWallet reducer");
    console.log(temp);
    AsyncStorage.setItem("state", JSON.stringify({ ...state ,...{wallets: temp}}));
    return updateObject(state, {wallets: temp});
};

const addTransaction = (state, action) => {
    console.log("addTransaction reducer");
    let temp = state.transactions;
    temp.push({transactionType: action.transactionType, sender: action.sender, receiver: receiver.to, 
        value: action.value, status: action.status });
    console.log(temp);
    AsyncStorage.setItem("state", JSON.stringify({ ...state, ...{transactions: temp} } ));
    return updateObject(state, action.state);
};

const setStore = (state, action) => {
    console.log("setStore reducer");
    console.log(action.store);
    return updateObject(state, action.store);
};

const setActiveWallet = (state, action) => {
    console.log('setActiveWallet reducer');
    console.log(action.walletName);
    return updateObject(state, {activeWallet: action.walletName});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.Add_Wallet: return addWallet(state, action);
        case actionTypes.Add_Transaction: return addTransaction(state, action);
        case actionTypes.Set_Store: return setStore(state, action);
        case actionTypes.Set_Active_Wallet: return setActiveWallet(state, action);
        default:
            return state;
    }
};

export default reducer;
