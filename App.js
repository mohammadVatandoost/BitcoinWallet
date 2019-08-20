import React, {Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import CreateWallet from './Screens/CreateWallet/CreateWallet';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from 'react-redux';
import walletReducer from './Redux/reducers/wallets';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import ImportWallet from './Screens/ImportWallet/ImportWallet';
import QRCodeScan from './Screens/QRCodeScan/QRCodeScan';
import * as actions from './Redux/actions/wallets';
import OneSignal from 'react-native-onesignal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    key: 'primary',
    storage
}


 const rootReducer = combineReducers({
    wallet: walletReducer
});
 
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// store.dispatch(actions.updateStateFromLocalStorage());

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
    },
    ImportWallet: {
        screen: ImportWallet
    },
    QRCodeScan: {
        screen: QRCodeScan
    },
},{
    initialRouteName: 'Home',
});



const AppContainer  = createAppContainer(AppNavigator);

// export default App;

// export default AppNavigator;
// export default createAppContainer(
//     <Provider store={store}>
//         <AppNavigator />
//     </Provider>
// );

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("70c2bcf9-e17c-48a5-b14c-1f6e6632c3ec", {kOSSettingsKeyAutoPrompt : true});

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();  // triggers the ids event
    console.log('OneSignal init ');
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  render () {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    )
  }
}
