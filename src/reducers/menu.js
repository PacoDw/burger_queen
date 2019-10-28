import {
  SET_MENU_ITEM,
  CLEAN_TOTAL_AMOUNT,
  SET_CLIENT_NAME,
  CLEAN_CLIENT_NAME,
  SET_SHOW_DIALOG,
} from "../actions/menu";

export const menu = (state = {}, action) => {
  switch (action.type) {
    case SET_MENU_ITEM: {
      const item = action.payload
      const { count, price, subtotal } = item
      item.subtotal = parseFloat(count) * parseFloat(price)
      let totalOrder = (parseFloat(state.totalOrder) - subtotal) + item.subtotal
      return {
        ...state,
        totalOrder,
        isMenuClean: totalOrder > 0 ? false : true,
        [item.name]: { ...state[item.name], ...item }
      }
    }
    case SET_CLIENT_NAME: {
      return { ...state, clientName: action.payload }
    }
    case CLEAN_TOTAL_AMOUNT: {
      return { ...state, totalOrder: 0 }
    }
    case CLEAN_CLIENT_NAME: {
      return { ...state, clientName: "", showDialog: false, loadingSendData:false }
    }
    case SET_SHOW_DIALOG: {
      return { ...state, showDialog: action.payload, loadingSendData:true }
    }
    default: {
      return state
    }
  }
}
