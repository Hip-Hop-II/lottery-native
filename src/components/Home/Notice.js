import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'
import {
  Icon, Button
} from 'native-base'
import colors from '../../styles/colors'

const Notice = ({message}) => (
  <View style={styles.wrapper}>
    <View style={styles.wrapperImage}>
      <ImageBackground source={require('../../images/home/notiy.png')} style={styles.image}/>
    </View>
    <Text>是大结局时间倒计时倒计时倒计时多久</Text>
    <Button transparent>
      <Icon name="ios-arrow-forward" style={{color: colors.LIGHT_BLACK}} />
    </Button>
  </View>
)

Notice.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    borderBottomWidth: .5,
    borderBottomColor: colors.GRAY1
  },
  wrapperImage: {
    width: 36,
    height: 15
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default Notice
