import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {AsyncStorage} from 'react-native';

const initialState = {
    wallets: [],
    loading: false,
    error: '',
    transactions: [],
};

const createWallet = (state, action) => {
    let temp = state.wallets;
    temp.push({walletName: action.walletName, privateAddress: action.privateAddress, publicAddress: action.publicAddress });
    console.log("createWallet reducer");
    console.log(temp);
     AsyncStorage.setItem("state", JSON.stringify({ ...state ,...{wallets: temp}}));
    return updateObject(state, {wallets: temp});
};

const updateState = (state, action) => {
    console.log("getWallets reducer");
    console.log(action.state);
    return updateObject(state, action.state);
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.Add_Wallet: return createWallet(state, action);
        case actionTypes.Add_Transaction: return updateState(state, action);
        case actionTypes.Set_Store: return updateState(state, action);
        default:
            return state;
    }
};

export default reducer;
