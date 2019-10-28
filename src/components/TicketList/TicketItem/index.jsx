import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import { Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  totalBox: {
    margin: "10px 0",
  },
  subTotalBox: {
    width: "64%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  totalText: {
    margin: 0,
    alignSelf: "end"
  },
  priceIcon: {
    backgroundColor: green[300]
  },
  priceSection: {
    position: "absolute",
    margin: 0,
    bottom: 0,
    left: "55%",
  },
  totalAmount: {
    position: "absolute",
    left: "61%",
    margin: 0,
    fontWeight: "bold",
  },
});

const TicketItem = ({ type = "", name, count, price, total = 0 }) => {
  const classes = useStyles();
  return (
    <div>
      {
        (type === "avatar")
          ?
          <ListItem className={`MuiPaper-elevation4 ${classes.totalBox}`}>
            <div className={classes.subTotalBox}>
              <Typography
                className={classes.totalText}
                gutterBottom
                component="h4"
                variant="h5">
                Total
            </Typography>
              <ListItemAvatar>
                <Avatar className={classes.priceIcon}>
                  <MoneyIcon />
                </Avatar>
              </ListItemAvatar>
            </div>
            <Typography
              className={classes.totalAmount}
              gutterBottom
              component="h4"
              variant="h5">
              {parseFloat(total).toFixed(2)}
            </Typography>
          </ListItem>
          :
          <ListItem>
            <ListItemText primary={name} secondary={`$${parseFloat(price).toFixed(2)} X ${count}`} />
            <Typography
              className={classes.priceSection}
              gutterBottom
              component="h4"
              variant="h5">
              {`$ ${parseFloat(price * count).toFixed(2)}`}
            </Typography>
          </ListItem>
      }
    </div>

  );
};

TicketItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  total: PropTypes.number,
};

export default TicketItem
