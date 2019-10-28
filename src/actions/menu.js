import { menuFromObjToArray } from "../utils";
import { createSelector } from 'reselect'

export const SET_MENU_ITEM = "SET_MENU_ITEM"
export const SET_CLIENT_NAME = "SET_CLIENT_NAME"
export const CLEAN_TOTAL_AMOUNT = "CLEAN_TOTAL_AMOUNT"
export const CLEAN_CLIENT_NAME = "CLEAN_CLIENT_NAME"
export const SET_SHOW_DIALOG = "SET_SHOW_DIALOG"

export const setClientName = payload => ({ type: SET_CLIENT_NAME, payload })
export const setMenuItem = payload => ({ type: SET_MENU_ITEM, payload })
export const cleanTotalAmount = payload => ({ type: CLEAN_TOTAL_AMOUNT, payload })
export const cleanClientName = payload => ({ type: CLEAN_CLIENT_NAME, payload })
export const setShowDialog = payload => ({ type: SET_SHOW_DIALOG, payload })

export const setMenuItems = payload => {
  return dispatch => {
    payload.forEach(menuItem => dispatch(setMenuItem(menuItem)))
  }
}

export const cleanMenu = payload => {
  return dispatch => {    
    dispatch(cleanTotalAmount())
    dispatch(cleanClientName())
    payload.forEach(item => {
      dispatch(setMenuItem({
        ...item,
        count: 0,
        subtotal: 0,
      }))
    });
  }
}

export const sendOrder = payload => {
  return dispatch => {
    dispatch(setShowDialog(true))
    // ...request logic to send data to the server
    setTimeout(() => {
      dispatch(cleanMenu(payload.order))
      alert("Tus datos se han enviado")
    }, 2000);
  }
}

export const getMenu = createSelector(
  state => menuFromObjToArray(state),
  menu => menu
)

export const getTotal = createSelector(
  state => state.menu.totalOrder,
  total => total
)

export const getIfMenuIsClean = createSelector(
  state => state.menu.isMenuClean,
  isClean => isClean
)

export const getClientName = createSelector(
  state => state.menu.clientName,
  name => name
)

export const getShowDialog = createSelector(
  state => state.menu.showDialog,
  show => show
)

export const getLoadingSendData = createSelector(
  state => state.menu.loadingSendData,
  loading => loading
)

export const getRequestResult = createSelector(
  getClientName,
  getMenu,
  getTotal,
  (client, order, total) => ({ client, order: order.filter(item => item.count > 0), total })
)
