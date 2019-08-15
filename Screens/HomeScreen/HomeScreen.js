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
import  Carousel  from 'react-native-snap-carousel';
import Rectangle from '../../Components/Rectangle/Rectangle';
import { connect } from 'react-redux';

const ENTRIES2 = [ {name: "test1"}, {name: "test2"}, {name: "test3"}];

class HomeScreen extends Component {

    _renderItem ({item, index}) {
        return  <Rectangle text={item.walletName}/>;
    }

    render() {
         console.log("this.props.wallets");console.log(this.props.wallets);
        return (
            <View style={styles.container}>
              <Carousel
                  data={this.props.wallets}
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

const mapStateToProps = state => {
    return {
        loading: state.wallet.loading,
        wallets: state.wallet.wallets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createWallet: (walletName, privateAddress, publicAddress) => dispatch( actions.createWallet(walletName, privateAddress, publicAddress) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);