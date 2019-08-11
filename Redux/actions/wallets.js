import * as actionTypes from './actionTypes';

export const createWallet = (walletName, privateAddress, publicAddress) => {
    console.log('createWallet actions');
    return {
        type: actionTypes.Create_Wallet,
        walletName: walletName,
        privateAddress: privateAddress,
        publicAddress: publicAddress
    }
}
