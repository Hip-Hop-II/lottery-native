import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

class Loading extends Component {
  render() {
    return (
     <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={require('../../images/loading.gif')} style={styles.image} />
      </View>
       <View style={styles.mask}>

       </View>
     </View>
    )
  }
}

Loading.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999
  },
  mask: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)'
  },
  imageWrapper: {
    position: 'absolute',
    left: '50%',
    marginLeft: -40,
    top: '40%',
    zIndex: 10,
    width: 80,
    height: 80
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default Loading
