import React, { Component } from 'react'
import {
  Image,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl
} from 'react-native'
import {
  Card,
  CardItem,
  Body
} from 'native-base'
import colors from '../../styles/colors'

class ActivityContainer extends Component {
  state = {
    refreshing: false
  }
  _renderData = () => {
    return Array.from({length: 10}).map((item, index) => {
      return {
        img: require('../../images/home/banner.jpg'),
        discription: '图标的制作和上传可以参照官网给出的',
        date: '2017-06-08'
      }
    })
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      setTimeout (() => {
        this.setState({refreshing: false})
      }, 2000)
    })
  }
  _onEndReached = () => {

  }
  _keyExtractor = (item, index) => item + index
  _renderItem = ({item}) => (
    <Card>
      <CardItem cardBody>
        <Image source={item.img} style={styles.cardImage} />
      </CardItem>
      <CardItem bordered>
        <Body style={styles.cardItemBody}>
          <Text style={styles.cardItemBodyDiscrption}>{item.discription}</Text>
          <Text style={styles.cardItemBodyDate}>{item.date}</Text>
        </Body>
      </CardItem>
    </Card>
  )
  render() {
    return (
      <FlatList
      data={this._renderData()}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      onEndReached={this._onEndReached}
      refreshControl={
        <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            title="刷新中"
            tintColor="#e33"
            titleColor="#e33"
         />
      }
      onEndReachedThreshold={150}
      >
      </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  cardImage: {
    width: '100%',
    height: 160
  },
  cardItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardItemBodyDiscrption: {
    color: colors.PRIMARY
  },
  cardItemBodyDate: {
    color: colors.GRAY2
  }
})

export default ActivityContainer 