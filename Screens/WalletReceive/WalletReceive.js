import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput, TouchableHighlight
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation'
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';
import {FastDesign, color} from "../../Styles/Styles";
import HorizontalLine from '../../Components/HorizontalLine/HorizontalLine';

class WalletReceive extends Component {

    constructor(props) {
        super(props);
        this.state = { walletName: '' };
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
            <View style={{...FastDesign.flexColumn}}>
                <Text>WalletReceive</Text>
            </View>
        );
    }
}



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
        loading: state.wallet.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTransaction: (transactionType, sender, receiver, value, status) => dispatch( actions.addTransaction(transactionType, sender, receiver, value, status) ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(WalletReceive));
// export default CreateWallet;
