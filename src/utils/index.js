import toPairs from "lodash.topairs"

export const menuFromObjToArray = ({ menu }) => (
  toPairs(menu)
    .filter(item => 
      item[0] !== "totalOrder" && 
      item[0] !== "isMenuClean" && 
      item[0] !== "clientName" && 
      item[0] !== "loadingSendData" && 
      item[0] !== "showDialog")
    .map(([key, value]) => ({
      key: value.src,
      name: value.name,
      description: value.description,
      price: value.price,
      count: value.count,
      foodType: value.foodType,
      subtotal: value.price * value.count,
      src: value.src,
    }))
)

export const mapMenuItem = (items, callback) => (
  items
    .filter(item => item.count > 0)
    .map((item, i) => callback(item, i))
)
