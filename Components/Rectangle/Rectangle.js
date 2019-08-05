import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    StatusBar, TouchableHighlight
} from 'react-native';



class Rectangle extends Component {

    onPress = () => {

    }

    render() {
        return (
            <TouchableHighlight style={styles.container} onPress={this.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '25%', borderRadius:10, justifyContent: 'center',
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


export default Rectangle;