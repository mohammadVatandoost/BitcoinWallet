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



const AppContainer  = createAppContainer(AppNavigator);

// export default App;

// export default AppNavigator;
// export default createAppContainer(
//     <Provider store={store}>
//         <AppNavigator />
//     </Provider>
// );

export default class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    )
  }
}
