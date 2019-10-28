import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import TicketItem from '../TicketList/TicketItem';
import DividerLine from './TicketItem/DividerLine';
import { makeStyles } from '@material-ui/styles';
import { mapMenuItem } from '../../utils';

const useStyles = makeStyles({
  listTicketBox: {
    height: "calc(100vh - 207px)",
    overflow: "auto",
    padding: "5px"
  },
  emptyBox: {
    fontSize: "xx-large",
    color: "#d7d6d6",
    position: "absolute",
    right: "23%",
    bottom: "50%",
  }
})

const TicketList = ({ menuItems }) => {
  const classes = useStyles();
  
  const ticketList = mapMenuItem(menuItems, (item, i) => (
    <div key={item.src}>
      {i !== 0 ? <DividerLine key={`${item.name}-key`} /> : ""}
      <TicketItem
        key={item.name}
        name={item.name}
        price={item.price}
        count={item.count}
      />
    </div>)
  )
  
  return (
    <List className={`MuiAppBar-colorDefault MuiPaper-elevation4 ${classes.listTicketBox}`} position="sticky" >
      {
        ticketList.length > 0
          ? ticketList
          : <div className={classes.emptyBox}> Sin productos </div>
      }
    </List>
  );
};

TicketList.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default TicketList
