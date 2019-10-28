import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { AppBar } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { setClientName, getClientName } from '../actions/menu';
import ToolBar from '../components/ToolBar';

class AppBarContainer extends Component {

  handleSetClientName = ({ target }) => {
    this.props.setClientName(target.value)
  }

  render() {
    return (
      <AppBar style={{ backgroundColor: pink[300] }}>
      <ToolBar 
        onSetClient={this.handleSetClientName}
        clientName={this.props.clientName}
      />
      </AppBar>
    );
  }
}

AppBarContainer.propTypes = {
  setClientName: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setClientName: name => dispatch(setClientName(name)),
})

const mapStateToProps = state => ({
  clientName: getClientName(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)
