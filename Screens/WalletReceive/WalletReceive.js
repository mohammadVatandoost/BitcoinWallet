import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet, Image,
    TextInput, TouchableHighlight
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation'
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';
import {FastDesign, color} from "../../Styles/Styles";
import HorizontalLine from '../../Components/HorizontalLine/HorizontalLine';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyle, globalVariable} from '../../Styles/globalStyle';

class WalletReceive extends Component {

    static navigationOptions = {
        tabBarLabel: "Receive",
        tabBarIcon:  ({ focused, tintColor }) => {
            return <Icon size={30} name="cloud_download" color={tintColor} />;
        },
    }

    constructor(props) {
        super(props);
        this.state = { publicAddress: '', value: 0 };
        var wallets = this.props.wallets;
        console.log("WalletReceive constructor");
        console.log(wallets);
        for(var i=0; i<wallets.length; i++) {
            if(wallets[i].walletName === this.props.activeWallet) {
                console.log(wallets[i]);
               this.setState({publicAddress: wallets[i].publicAddress, value: wallets[i].value})
            }
        }
    }

    onPress = () => {
        // this.props.navigation.navigate(this.props.screen);
        // this.props.createWallet(this.state.walletName, "test", "test");
        // this.props.navigation.goBack();
        // this.props.navigation.dispatch(NavigationActions.back())
        // this.props.navigation.push("Home");
  
    }

    render() {
        return (
            <View style={{...FastDesign.flexColumn, ...FastDesign.alignCenter, ...FastDesign.flexOne, ...globalStyle.backgroundColor}}>
                <Text style={{...globalStyle.textColor, ...FastDesign.textCenter, ...FastDesign.h3}}>{this.props.activeWallet}</Text>
                <Image style={{height: 200, width: 200, marginTop: 25, marginBottom: 25}} source={require('../../assets/images/QRCode.png')} />
                <Text style={{...globalStyle.textColor, ...FastDesign.textCenter, ...FastDesign.h5}}>Your Current Bitcoin Wallet</Text>
                <Text style={{...globalStyle.textColor, ...FastDesign.textCenter, ...FastDesign.h5}}>{this.state.publicAddress}</Text>
                <View style={{...FastDesign.flexRow, ...FastDesign.col4, ...FastDesign.flexSpaceAround, ...FastDesign.mt2}}>    
                    <Icon.Button name="file_copy" iconStyle={{marginRight: 0}} backgroundColor={globalVariable.iconColor} onPress={this.loginWithFacebook} />
                    <Icon.Button name="share" iconStyle={{marginRight: 0}} backgroundColor={globalVariable.iconColor} onPress={this.loginWithFacebook} />
                </View>
            </View>
        );
    }
}

//<Icon size={60} name="file_copy" color={globalVariable.iconColor} />;
 //                   <Icon size={60} name="share" color={globalVariable.iconColor} />;

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
    title : {
        fontSize: 35, fontWeight: 'bold',
    },
    primery_input: {
        width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 30, padding: 15, fontSize: 25,
        borderRadius:10,
    },
    successBtn: {
        padding: 20, borderRadius:10,
        fontWeight: 'bold',
        backgroundColor: "#00CA4C", marginTop: 20,
    },
    textBtn : {
        fontSize: 25, color: "white"
    }
});


const mapStateToProps = state => {
    return {
        loading: state.wallet.loading,
        activeWallet: state.wallet.activeWallet,
        wallets: state.wallet.wallets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTransaction: (transactionType, sender, receiver, value, status) => dispatch( actions.addTransaction(transactionType, sender, receiver, value, status) ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(WalletReceive));
// export default CreateWallet;
