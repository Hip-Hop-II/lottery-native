import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'

class InputField extends Component {
  render() {
    const {icons, placeholder, style} = this.props
    return (
      <View style={[styles.wrapper, style]}>
        <View style={styles.iconWrapper}>
          {icons}
        </View>
        <TextInput placeholder={placeholder} 
        style={styles.input} 
        underlineColorAndroid="transparent"
        />
      </View>
    )
  }
}

InputField.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    left: 5,
    bottom: 8
  },
  input: {
    borderBottomWidth: .5,
    borderBottomColor: colors.GRAY1,
    paddingBottom: 15,
    fontSize: 14,
    paddingLeft: 36
  }
})
export default InputField
