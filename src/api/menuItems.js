
export const baseUrl = 'http://localhost:4001/'
 const urlMenuItems = `${baseUrl}menuItems`


export const getMenuItems = () => (
  fetch(urlMenuItems).then(res => res.json())
)