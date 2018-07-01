import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Icon
} from 'native-base'

class LotteryContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '开奖',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-football-outline" style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text>hello Lottery</Text>
      </View>
    )
  }
}

export default LotteryContainer
