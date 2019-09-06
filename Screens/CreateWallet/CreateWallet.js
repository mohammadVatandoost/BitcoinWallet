import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput, TouchableHighlight
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation'
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';
import {FastDesign, backgroundColor, textColor} from '../../Styles/Styles';
import {globalStyle} from '../../Styles/globalStyle';

class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.state = { walletName: '' };
    }

    onPress = () => {
        // this.props.navigation.navigate(this.props.screen);
        this.props.addWallet(this.state.walletName, "test", "test", 0);
        const refreshFunction = this.props.navigation.state.params.refreshFunction;
        if(typeof refreshFunction === 'function')
        {
            refreshFunction();                
        }
        this.props.navigation.goBack();
        // this.props.navigation.dispatch(NavigationActions.back())
        // this.props.navigation.push("Home");
    }

    render() {
        console.log("CreateWallet page this.props.loading");console.log(this.props.loading);
        return (
            <View style={{...styles.container, ...globalStyle.backgroundColor}}>
                <Text style={styles.title}>Create New Wallet</Text>
                <TextInput placeholder="Enter your wallet name"
                    style={styles.primery_input}
                    onChangeText={(text) => this.setState({walletName: text})}
                    value={this.state.walletName}
                />
                <TouchableHighlight style={{...styles.successBtn, ...globalStyle.buttonBackgroud}} onPress={this.onPress}>
                   <Text style={styles.textBtn}> Create </Text>
                </TouchableHighlight>
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
        fontSize: 35, fontWeight: 'bold', color: "white"
    },
    primery_input: {
        width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 30, padding: 15, fontSize: 25,
       borderRadius:10, color: "white"
    },
    successBtn: {
         padding: 20, borderRadius:10,
        fontWeight: 'bold',
         marginTop: 20,backgroundColor: "#00CA4C",
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
        addWallet: (walletName, privateAddress, publicAddress, value) => dispatch( actions.addWallet(walletName, privateAddress, publicAddress, value) ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateWallet));
// export default CreateWallet;