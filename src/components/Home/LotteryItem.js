import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native'
import {Button} from 'native-base'

class LotteryItem extends Component {
  render() {
    const {label, icon} = this.props
    return (
      <TouchableOpacity style={styles.wrapper} activeOpacity={.7}>
        <View style={styles.wrapperImage}>
          <Image source={icon} style={styles.image} />
        </View>
        <Text>{label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width / 3,
    height: 112,
    alignItems: 'center',
    marginBottom: 15
  },
  wrapperImage: {
    width: 95,
    height: 95
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

LotteryItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.number
}

export default LotteryItem
