import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Icon
} from 'native-base'

class UserContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-contact-outline" style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text>hello User</Text>
      </View>
    )
  }
}

export default UserContainer
