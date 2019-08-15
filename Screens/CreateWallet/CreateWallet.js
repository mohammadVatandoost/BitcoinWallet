import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput, TouchableHighlight
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation'
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';


class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.state = { walletName: '' };
    }

    onPress = () => {
        // this.props.navigation.navigate(this.props.screen);
        this.props.createWallet(this.state.walletName, "test", "test");
        // this.props.navigation.back();
        // this.props.navigation.dispatch(NavigationActions.back())
        this.props.navigation.push("Home");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create New Wallet</Text>
                <TextInput placeholder="Enter your wallet name"
                    style={styles.primery_input}
                    onChangeText={(text) => this.setState({walletName: text})}
                    value={this.state.walletName}
                />
                <TouchableHighlight style={styles.successBtn} onPress={this.onPress}>
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
        createWallet: (walletName, privateAddress, publicAddress) => dispatch( actions.createWallet(walletName, privateAddress, publicAddress) )
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateWallet));
// export default CreateWallet;