import {NavigationActions} from 'react-navigation'
import {RootNavigator} from '../../navigators/AppNavigator'

const firstAction = RootNavigator.router.getActionForPathAndParams('Main')
const tempNavState = RootNavigator.router.getStateForAction(firstAction)

const initNavState = RootNavigator.router.getStateForAction(
  firstAction,
  tempNavState
)

export const nav = (state = initNavState, action) => {
  let nextState
  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state)
      break
    }
  return nextState || state
}
