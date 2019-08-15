import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    wallets: [],
    loading: false
};

const createWallet = (state, action) => {
    let temp = state.wallets;
    temp.push({walletName: action.walletName, privateAddress: action.privateAddress, publicAddress: action.publicAddress, });
    console.log("createWallet reducer");
    console.log(temp);
    return updateObject(state, {wallets: temp});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.Create_Wallet: return createWallet(state, action);
        default:
            return state;
    }
};

export default reducer;
