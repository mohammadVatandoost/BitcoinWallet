

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
import CreateWallet from './Screens/CreateWallet/CreateWallet';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import  Carousel  from 'react-native-snap-carousel';

const ENTRIES2 = [ {name: "test1"}, {name: "test2"}, {name: "test3"}];

class HomeScreen extends Component {

    _renderItem ({item, index}) {
        return  <Rectangle text={item.name}/>;
    }

    render() {
        return (
            <View style={styles.container}>
              <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={200}
                  itemWidth={200}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
              />
              <Rectangle text="Create Wallet"  screen="CreateWallet" />
              <Rectangle text="Import Wallet"/>
              <Rectangle text="Import Gift cart"/>
            </View>
  );
 }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    CreateWallet: {
        screen: CreateWallet
    }
});

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

// export default HomeScreen;
export default createAppContainer(AppNavigator);
