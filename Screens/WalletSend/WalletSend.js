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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyle} from '../../Styles/globalStyle';
import TextInputLine from '../../Component/TextInputLine/TextInputLine';

class WalletSend extends Component {

    static navigationOptions = {
        tabBarLabel: "Send",
        tabBarIcon:  ({ focused, tintColor }) => {
            return <Icon size={30} name="cloud_upload" color={tintColor} />;
        },
    }

    constructor(props) {
        super(props);
        this.state = { walletName: '', receiverAddress: '', value: 0 };
    }

    onPress = () => {
        // this.props.navigation.navigate(this.props.screen);
        // this.props.createWallet(this.state.walletName, "test", "test");
        // this.props.navigation.goBack();
        // this.props.navigation.dispatch(NavigationActions.back())
        // this.props.navigation.push("Home"); backgroundColor={globalVariable.iconColor}
    }

    setText = (text) => {
        // console.log(text);
        this.setState({receiverAddress: text});
    };


    render() {
        var dollarValue = parseInt(this.state.value)*10400;
        dollarValue = " $ " + dollarValue;
        return (
            <View style={{...FastDesign.flexColumn, ...FastDesign.flexOne, ...globalStyle.backgroundColor}}>
              	<Text style={{...FastDesign.textCenter, ...FastDesign.h3}}>{this.props.activeWallet}</Text>
              	<View style={{...FastDesign.flexRow, ...FastDesign.alignSelfStretch}}>
              		<Icon.Button name="apps" iconStyle={{marginRight: 0}}  onPress={this.loginWithFacebook} />
              		<TextInputLine value={this.state.receiverAddress} onChangeText={this.setText} placeholder="Receiver Publice Address"/>
              	</View>
                <View style={{...FastDesign.flexRow, ...FastDesign.alignSelfStretch}}>
                   <TextInputLine value={this.state.value} onChangeText={(text) => {this.setState({value: text})}} />
                   <Text>BTC</Text>
                </View>   
                <Text>{dollarValue}</Text>
                <View style={{...FastDesign.flexRow, ...FastDesign.alignSelfStretch}}>
                   <Text>Bitcoin Network Fee:</Text>
                   <Text>0.00002 BTC</Text>
                   <Text>$ 2.12 </Text>    
                </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(WalletSend));
// export default CreateWallet;
