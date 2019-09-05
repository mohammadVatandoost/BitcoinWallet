import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {AsyncStorage} from 'react-native';

const initialState = {
    wallets: [],
    loading: false,
    error: '',
    transactions: [],
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
    temp.push({transactionType: action.transactionType, from: action.from, to: action.to, value: action.value });
    console.log(temp);
    AsyncStorage.setItem("state", JSON.stringify({ ...state ,...{transactions: temp}}));
    return updateObject(state, action.state);
};

const setStore = (state, action) => {
    console.log("setStore reducer");
    console.log(action.state);
    return updateObject(state, action.state);
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.Add_Wallet: return addWallet(state, action);
        case actionTypes.Add_Transaction: return addTransaction(state, action);
        case actionTypes.Set_Store: return setStore(state, action);
        default:
            return state;
    }
};

export default reducer;
