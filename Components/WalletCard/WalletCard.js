import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    StatusBar, TouchableHighlight
} from 'react-native';
import {withNavigation} from 'react-navigation'
import {FastDesign, backgroundColor, textColor} from '../../Styles/Styles';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';

class WalletCard extends Component {

    onPress = () => {
        console.log("onPress");
        // console.log(this.props.screen);
        // console.log(this.props.navigation);
        // this.props.navigation.push(this.props.screen);
        this.props.setActiveWallet(this.props.walletName);
        this.props.navigation.navigate('Wallet', {walletName: this.props.walletName});
    }

    render() {
        return (
            <TouchableHighlight style={{...styles.container}} onPress={this.onPress}>
             <View>
                <Text style={{...FastDesign.h5, ...textColor.white}}>{this.props.walletName}</Text>
                <Text style={{...FastDesign.h5, ...textColor.white}}>{this.props.value} BTC</Text>
             </View>   
            </TouchableHighlight>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100, 
        borderRadius:10, justifyContent: 'center',
        backgroundColor: '#0486DB', alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});

const mapStateToProps = state => {
    return {
        loading: state.wallet.loading,
        wallets: state.wallet.wallets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActiveWallet: (walletName) => dispatch( actions.setActiveWallet(walletName) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(WalletCard));

// export default withNavigation(WalletCard);