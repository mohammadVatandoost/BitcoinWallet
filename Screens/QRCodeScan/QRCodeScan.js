import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet, Button,
    TouchableOpacity, TouchableHighlight
} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation'
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/wallets';
import {FastDesign} from '../../Styles/Styles';
import QRCodeScanner from 'react-native-qrcode-scanner';

class QRCodeScan extends Component {

    constructor(props) {
        super(props);
    }

    onSuccess = (e) => {
        console.log("Qrcode scan");
        console.log(e.data);
        this.props.navigation.goBack();
    };


    scanQRCode = () => {}

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                topContent={
                    <Text style={styles.centerText}>
                        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}



const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
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


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(QRCodeScan));
// export default CreateWallet;