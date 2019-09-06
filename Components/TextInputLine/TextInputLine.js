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

class TextInputLine extends Component {
    render() {
        return (
            <TextInput value={this.props.value} style={styles.TextInput} placeholder={this.props.placeholder}
                       onChangeText={(text) => {this.props.onChangeText(text)}} placeholderTextColor={this.props.placeholderTextColor} />
        )
    }
}

const styles = StyleSheet.create({
    TextInput: {
        textAlign: 'center',
        fontSize: 22,
        borderBottomWidth: 2, color: 'white',
        borderWidth: 1,
        padding: 5,
        alignSelf: 'stretch', marginTop: 10, marginBottom: 10
    },
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


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(TextInputLine));
// export default CreateWallet;
