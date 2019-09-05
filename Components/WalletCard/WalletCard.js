import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    StatusBar, TouchableHighlight
} from 'react-native';
import {withNavigation} from 'react-navigation'


class WalletCard extends Component {

    onPress = () => {
        // console.log("onPress");
        // console.log(this.props.screen);
        // console.log(this.props.navigation);
        // this.props.navigation.push(this.props.screen);
    }

    render() {
        return (
            <TouchableHighlight style={{...styles.container, ...this.props.style}} onPress={() => {this.props.onPress();} }>
                <Text style={{...styles.text, ...this.props.textStyle}}>{this.props.walletName}</Text>
            </TouchableHighlight>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100, 
        borderRadius:10, justifyContent: 'center',
        backgroundColor: 'skyblue', alignItems: 'center',
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


export default withNavigation(WalletCard);