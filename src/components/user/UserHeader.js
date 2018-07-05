import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import {
  Button,
  Icon
} from 'native-base'
import colors from '../../styles/colors'

export default function UserHeader ({username}) {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../images/user/F06.png')} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.bodyHeading}>
          <Text style={styles.bodyUsername}>{username}</Text>
          <Text style={styles.bodyLevel}>白金VIP</Text>
        </View>
        <Text style={styles.phoneText}>暂无</Text>
      </View>
      <Button transparent style={styles.forwardButton}>
        <Icon name="ios-arrow-forward" style={{color: colors.GRAY1}} />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.PURPLE_DARK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    flex: 1,
    paddingLeft: 20
  },
  bodyHeading: {
    flexDirection: 'row'
  },
  image: {
    width: 75,
    height: 75,
    alignSelf: 'center'
  },
  bodyUsername: {
    color: colors.WHITE,
    marginRight: 5,
    fontSize: 16
  },
  bodyLevel: {
    color: colors.PRIMARY,
    fontSize: 16
  },
  phoneText: {
    color: colors.PRIMARY,
    marginTop: 10
  },
  forwardButton: {
    alignSelf: 'center'
  }
})