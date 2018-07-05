import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  Header,
  Left,
  Right,
  Icon,
  Body,
  Button,
  List,
  ListItem,
  Container
} from 'native-base'
import colors from '../styles/colors'
import UserHeader from '../components/user/UserHeader'
import UserBalance from '../components/user/UserBalance'

class UserContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-contact-outline" style={{color: tintColor}} />
    )
  }
  render() {
    const userInfo={username: 'Antony'}
    return (
      <Container style={styles.wrapper}>
        <Header style={styles.header}>
          <Left>
            <ImageBackground style={styles.headerBgImage}
              source={require('../images/home/small_logo.png')}
            />
          </Left>
          <Right style={styles.headerRight}>
            <Button transparent>
              <Text style={styles.headerButtonText}>设置</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView style={styles.scrollView}>
          <UserHeader {...userInfo} />
          <UserBalance />
          <List style={styles.list}>
            <ListItem icon>
              <Left>
                <Icon name="ios-paper" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>交易记录</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-card" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>下注记录</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward"  />
              </Right>
            </ListItem>
            <ListItem icon last>
              <Left>
                <Icon name="ios-card" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>银行卡</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <List style={styles.list}>
            <ListItem icon>
              <Left>
                <Icon name="ios-game-controller-b" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>游戏规则</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-star" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>关于我们</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward"  />
              </Right>
            </ListItem>
            <ListItem icon last>
              <Left>
                <Icon name="ios-information-circle" style={{color: colors.PRIMARY}} />
              </Left>
              <Body>
                <Text>联系我们</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    backgroundColor: colors.PURPLE_DARK
  },
  headerBgImage: {
    width: 230/2,
    height: 40/2
  },
  headerButtonText: {
    color: colors.WHITE
  },
  scrollView: {
    flex: 1
  },
  list: {
    marginTop: 15,
    backgroundColor: colors.WHITE
  }
})

export default UserContainer
