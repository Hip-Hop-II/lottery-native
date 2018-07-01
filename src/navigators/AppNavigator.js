import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import Logged from './TabNavigator'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)


export const RootNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Main: {
    screen: Logged,
    navigationOptions: () => ({
      header: null
    })
  }
}, {
  mode: 'modal'
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

export default connect(state => ({state: state.nav}))(AppWithNavigationState)
