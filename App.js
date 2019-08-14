

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
import { persistStore, persistCombineReducers } from 'redux-persist'
import  Carousel  from 'react-native-snap-carousel';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from 'react-redux';
import walletReducer from './Redux/reducers/wallets';
import storage from 'redux-persist/lib/storage'
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
                  sliderWidth={300}
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

const config = {
    key: 'primary',
    storage
}


 const rootReducer = combineReducers({
    wallet: walletReducer
});
const store = createStore(rootReducer);

// Use the reducer combining function provided by redux-persist
// const reducer = persistCombineReducers(config, { wallet: walletReducer })
// const store = createStore(reducer); //, applyMiddleware(logger)
// persistStore(
//     store,
//     null,
//     () => {
//         store.getState() // if you want to get restoredState
//     }
// )

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    CreateWallet: {
        screen: CreateWallet
    }
},{
    initialRouteName: 'Home',
});

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',
    paddingTop: 10
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

const App = createAppContainer(AppNavigator);

export default App;

// export default AppNavigator;
// export default createAppContainer(
//     <Provider store={store}>
//         <AppNavigator />
//     </Provider>
// );
