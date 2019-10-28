import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { setMenuItems, getMenu, setMenuItem } from "../actions/menu";
import TabMenus from "../components/TabMenus";

class MenuContainer extends Component {

  componentDidMount = () => {
    const { items } = this.props
    this.props.setMenu(items)
  }

  handleAddItem = item => {
    item.count += 1
    this.props.updateItem(item)
  }
  handleRemoveItem = item => {
    if (item.count > 0) {
      item.count -= 1
      this.props.updateItem(item)
    }
  }

  render() {
    const {menu} = this.props

    return (
      <TabMenus
        items={menu}
        onAddItem={this.handleAddItem}
        onRemoveItem={this.handleRemoveItem}
      />
    );
  }
}

MenuContainer.propTypes = {
  menu: PropTypes.array.isRequired,
  setMenu: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMenu: menuItems => dispatch(setMenuItems(menuItems)),
  updateItem: menuItem => dispatch(setMenuItem(menuItem))
})

const mapStateToProps = state => ({
  menu: getMenu(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
