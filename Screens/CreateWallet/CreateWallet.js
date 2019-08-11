import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput, TouchableHighlight
} from 'react-native';



class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.state = { walletName: 'Enter your wallet name' };
    }

    onPress = () => {
        // this.props.navigation.navigate(this.props.screen);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({walletName: text})}
                    value={this.state.walletName}
                />
                <TouchableHighlight onPress={this.onPress}>CreateWallet</TouchableHighlight>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '20%', borderRadius:10, justifyContent: 'center',
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
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default CreateWallet;