

import React, {Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Rectangle from './Components/Rectangle/Rectangle';

import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Rectangle text="Create Wallet"/>
              <Rectangle text="Import Wallet"/>
              <Rectangle text="Import Gift cart"/>
            </View>
  );
 }
}

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;
// export default createAppContainer(AppNavigator);
