import { DrawerState, TOGGLE_DRAWER } from "../actions/drawer"

const drawer = (state = DrawerState.CLOSE, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state === DrawerState.CLOSE ? DrawerState.OPEN : DrawerState.CLOSE
    default:
      return state
  }
}

export default drawer
