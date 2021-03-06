import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import AppNavigator from './src/navigators/AppNavigator'
import store from './src/redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
