import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TicketList from '../components/TicketList';
import TicketItem from '../components/TicketList/TicketItem';
import ButtonsArea from '../components/TicketList/ButtonsArea';
import {
  getMenu, getTotal, cleanMenu,
  getIfMenuIsClean, sendOrder, getClientName, getLoadingSendData,
} from '../actions/menu';


class TicketContainer extends Component {

  handleSendOrderButton = () => {
    this.props.sendOrder({
      clientName: this.props.clientName,
      order: this.props.menu,
      total: this.props.total,
    })
  }

  handleCleanOrder = () => {
    this.props.cleanMenu(this.props.menu)
  }

  render() {
    return (
      <div style={{ width: "100%", maxWidth: 360 }}>
        <TicketList
          menuItems={this.props.menu}
        />
        <TicketItem
          type="avatar"
          total={this.props.total}
        />
        <ButtonsArea
          onSendOrder={this.handleSendOrderButton}
          onCleanOrder={this.handleCleanOrder}
          isMenuClean={this.props.isMenuClean}
          clientName={this.props.clientName}
          loading={this.props.loadingSendData}
        />
      </div>
    );
  }
}

TicketContainer.propTypes = {
  menu: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  isMenuClean: PropTypes.bool.isRequired,
  clientName: PropTypes.string.isRequired,
  sendOrder: PropTypes.func.isRequired,
  loadingSendData: PropTypes.bool.isRequired,

};

const mapDispatchToProps = dispatch => ({
  cleanMenu: menu => dispatch(cleanMenu(menu)),
  sendOrder: order => dispatch(sendOrder(order)),
})

const mapStateToProps = state => ({
  menu: getMenu(state),
  total: getTotal(state),
  isMenuClean: getIfMenuIsClean(state),
  clientName: getClientName(state),
  loadingSendData: getLoadingSendData(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);
