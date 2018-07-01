import {createBottomTabNavigator} from 'react-navigation'

import HomeContainer from '../containers/HomeContainer'
import FoundContainer from '../containers/FoundContainer'
import LotteryContainer from '../containers/LotteryContainer'
import UserContainer from '../containers/UserContainer'

export default createBottomTabNavigator({
  Home: {
    screen: HomeContainer
  },
  Lottery: {
    screen: LotteryContainer
  },
  Found: {
    screen: FoundContainer
  },
  User: {
    screen: UserContainer
  }
}, {
  initialRouteName: 'Home'
})
