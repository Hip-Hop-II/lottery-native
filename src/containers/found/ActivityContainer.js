import React, { Component } from 'react'
import {
  Image,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Body
} from 'native-base'
import colors from '../../styles/colors'

class ActivityContainer extends Component {
  render() {
    const list = Array.from({length: 10}).map((item, index) => (
      <Card key={index}>
        <CardItem cardBody>
          <Image source={require('../../images/home/banner.jpg')} style={styles.cardImage} />
        </CardItem>
        <CardItem bordered>
          <Body style={styles.cardItemBody}>
            <Text style={styles.cardItemBodyDiscrption}>图标的制作和上传可以参照官网给出的</Text>
            <Text style={styles.cardItemBodyDate}>2017-06-08</Text>
          </Body>
        </CardItem>
      </Card>
    ))
    return (
      <ScrollView style={styles.wrapper}>
        {list}
      </ScrollView>
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