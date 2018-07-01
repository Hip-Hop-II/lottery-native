import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Icon
} from 'native-base'

class FoundContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-compass-outline" style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text>hello Found</Text>
      </View>
    )
  }
}

export default FoundContainer
