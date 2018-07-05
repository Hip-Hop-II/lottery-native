import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Button
} from 'native-base'
import colors from '../styles/colors'
import RoundButton from '../components/buttons/RoundButton'
import Swiper from 'react-native-swiper'
import Notice from '../components/Home/Notice'
import LotteryItem from '../components/Home/LotteryItem'
import Loading from '../components/loading'

import {User} from '../api'

import {lotteryList} from '../data/lottery'

class HomeContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '游戏',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" style={{ color: tintColor }} />
    )
  }
  state = {
    loading: false
  }
  componentWillUnmount () {
    this.setState({loading: false})
  }
  _renderList = () => {
    return lotteryList.map((item, index) => (
      <LotteryItem key={index} {...item} />
    ))
  }
  _loginPress = async (type) => {
    try {
      this.setState({loading: true})
      if (type === 'guest') {
        const data = await User.guest()
        this.setState({loading: false})
        if (data && data.token) {
          AsyncStorage.setItem('@token', data.token)
        }
      }
    } catch (error) {
      throw error
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        {this.state.loading && <Loading />}
        <Header style={styles.header}>
          <Left>
            <ImageBackground style={styles.headerBgImage}
              source={require('../images/home/small_logo.png')}
            />
          </Left>
          <Right style={styles.headerRight}>
            <RoundButton text="试玩" style={{marginRight: 8}} onPress={() => this._loginPress('guest')} />
            <RoundButton text="登录" onPress={() => this._loginPress('login')} />
          </Right>
        </Header>
        <ScrollView style={styles.scrollView}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
              <Image source={require('../images/home/banner.jpg')} style={styles.slideImage} />
            </View>
            <View style={styles.slide2}>
              <Image source={require('../images/home/banner.jpg')} style={styles.slideImage} />
            </View>
            <View style={styles.slide3}>
              <Image source={require('../images/home/banner.jpg')} style={styles.slideImage} />
            </View>
          </Swiper>
          <Notice />
          <View style={styles.lotteryList}>
            {this._renderList()}
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1
  },
  wrapper: {
    height: 155
  },
  slide1: {
    height: 155
  },
  slide2: {
    height: 155
  },
  slide3: {
    height: 155
  },
  slideImage: {
    width: '100%',
    height: '100%'
  },
  lotteryList: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})

export default HomeContainer
