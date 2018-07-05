import React from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'

export default function UserBalance () {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.balanceWrapper, {backgroundColor: colors.GREEN}]}>
         <Text style={styles.balanceText}>账号余额</Text>
         <Text style={styles.balanceValue}>￥10000.00</Text>
      </View>
      <View style={[styles.balanceWrapper, {backgroundColor: colors.PRIMARY}]}>
         <Text style={styles.balanceText}>可提余额</Text>
         <Text style={styles.balanceValue}>￥10000.00</Text>
      </View>
      <TouchableOpacity activeOpacity={.6} style={[styles.balanceWrapper, {backgroundColor: colors.LIGHT_GREEN, paddingVertical: 15}]}>
        <Text style={styles.balanceButtonText}>我要充值</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={.6} style={[styles.balanceWrapper, {backgroundColor: colors.LIGHT_PRIMARY, paddingVertical: 15}]}>
        <Text style={styles.balanceButtonText}>我要提现</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  balanceWrapper: {
    width: Dimensions.get('window').width /2,
    alignItems: 'center',
    paddingVertical: 10
  },
  balanceText: {
    color: colors.DARK_BLACK,
    fontSize: 12
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.WHITE
  },
  balanceButtonText: {
    color: colors.DARK_BLACK,
    fontSize: 14
  }
})