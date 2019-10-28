import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from './MenuItem';

const useStyles = makeStyles({
  listBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
})

const MenuList = ({ items, foodType, onAddItem, onRemoveItem }) => {
  const classes = useStyles();

  const strTocComppnent = items => (
    items
      .filter(item => item.foodType === foodType)
      .map(item => (
        <MenuItem
          key={item.src}
          name={item.name}
          description={item.description}
          price={item.price}
          count={item.count}
          src={item.src}
          onAddItem={_ => onAddItem(item)}
          onRemoveItem={_ => onRemoveItem(item)}
        />
      ))
  )

  return (
    <div className={classes.listBox}>
      {strTocComppnent(items)}
    </div>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  foodType: PropTypes.string.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default MenuList
