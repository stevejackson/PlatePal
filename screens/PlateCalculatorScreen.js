import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

export default class PlateCalculatorScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      gearAvailable: false
    };
  }

  componentWillMount() {
    this._fetchGearInventoryData();
  }

  async _fetchGearInventoryData() {
    const result = await AsyncStorage.getItem('@PlatePal:barWeight2');
    if (result !== null){
      this.setState({ gearAvailable: true });
      this.setState({ barWeight: result })
    }
    else {
      this.setState({gearAvailable: false});
    }
  }
  onNavigatorEvent(event) {
    if(event.id === 'bottomTabSelected' || 'bottomTabReselected') {
      this._fetchGearInventoryData();
    }
  }

  render() {
    if(this.state.gearAvailable) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Plate Calculator
          </Text>

          <Text>
            Gear is set!
            Bar weight: {this.state.barWeight}
          </Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Text>
            Please fill out your gear inventory first.
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
