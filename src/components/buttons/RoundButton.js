import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'

class RoundButton extends Component {
  render() {
    const {text, textColor, style, onPress} = this.props
    const color = textColor || colors.LIGHT_BLACK
    return (
      <TouchableOpacity
      activeOpacity={.6}
      onPress={onPress}
      style={[styles.wrapper, style]}>
        <Text style={[styles.wrapperText, {color}]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

RoundButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.WHITE
  },
  wrapperText: {
    fontSize: 14,
    fontWeight: '600'
  }
})

export default RoundButton
