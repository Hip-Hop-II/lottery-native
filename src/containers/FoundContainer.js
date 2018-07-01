import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground
} from 'react-native'
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Button,
  Tab,
  Tabs
} from 'native-base'
import colors from '../styles/colors'
import RoundButton from '../components/buttons/RoundButton'
import ActivifyContainer from './found/ActivityContainer'

const tabBackgroundColor = Platform.OS === 'android' ? {backgroundColor: colors.PRIMARY} : null
const tabActiveColor = {color: Platform.OS === 'ios' ? colors.PRIMARY : colors.WHITE}

class FoundContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-compass-outline" style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <ImageBackground style={styles.headerBgImage}
              source={require('../images/home/small_logo.png')}
            />
          </Left>
          <Right style={styles.headerRight}>
            <RoundButton text="登录" style={{marginRight: 8}} />
            <RoundButton text="注册" />
          </Right>
        </Header>
        <Tabs tabBarUnderlineStyle={{height: 1, backgroundColor: Platform.OS === 'ios' ? colors.PRIMARY : colors.WHITE}}>
          <Tab heading="优惠活动" 
          tabStyle={tabBackgroundColor}
          activeTabStyle={tabBackgroundColor}
          activeTextStyle={tabActiveColor}>
            <ActivifyContainer />
          </Tab>
          <Tab heading="系统公告" 
          tabStyle={tabBackgroundColor}
          activeTabStyle={tabBackgroundColor}
          activeTextStyle={tabActiveColor}>
          </Tab>
          <Tab heading="幸运榜" 
          tabStyle={tabBackgroundColor}
          activeTabStyle={tabBackgroundColor}
          activeTextStyle={tabActiveColor}>
          </Tab>
          <Tab heading="我的消息" 
          tabStyle={tabBackgroundColor}
          activeTabStyle={tabBackgroundColor}
          activeTextStyle={tabActiveColor}>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  header: {
    backgroundColor: colors.PURPLE_DARK
  },
  headerBgImage: {
    width: 230/2,
    height: 40/2
  },
})

export default FoundContainer
