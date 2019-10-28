import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { green, grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    maxWidth: 230,
    minWidth: 225,
    margin: "10px 0",
    display: "inline-block"
  },
  media: {
    height: 220,
  },
  mediaBottom: {
    height: "150px"
  },
  priceSection: {
    position: "absolute",
    margin: 0,
    bottom: 0,
  },
  iconBtnRemove: {
    color: red[200],
    backgroundColor: red[10],
    '&:hover': {
      backgroundColor: red[50],
      color: red[600],
    },
  },
  iconBtnAdd: {
    color: green[200],
    backgroundColor: green[10],
    '&:hover': {
      backgroundColor: green[50],
      color: green[600],
    },
  },
  fabBtnCount: {
    fontSize: "large",
    color: grey[250],
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[100],
      color: grey[600],
    },
  },
});


const MenuItem = ({ name = "Name", description = "Description", count = 0, src, price, onAddItem, onRemoveItem }) => {
  const classes = useStyles();
  const img = require('./../../../../assets/' + src);
  return (
    <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={src}
        />
        <CardContent className={classes.mediaBottom}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography className={classes.priceSection} gutterBottom variant="h5" component="h4">
            ${parseFloat(price).toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <CardActions>
          <IconButton className={classes.iconBtnRemove} aria-label="remove item" color={"inherit"} onClick={onRemoveItem}>
            <RemoveIcon />
          </IconButton>
          <IconButton className={classes.iconBtnAdd} aria-label="add item" color={"inherit"} onClick={onAddItem}>
            <AddIcon />
          </IconButton>
        </CardActions>
        <Fab className={classes.fabBtnCount} disableRipple={true} aria-label="count" color={"inherit"}>
          <p style={{ fontSize: "x-small" }}>x</p>{count}
        </Fab>

      </CardActions>

    </Card>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default MenuItem;