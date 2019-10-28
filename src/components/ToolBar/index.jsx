import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Typography, InputBase, makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  error: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: pink[600],
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
}))

const ToolBar = ({ onSetClient, clientName }) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Typography variant="h6">Burger Queen</Typography>
      <div className={clientName !== "" ? classes.search : classes.error}>
        <div className={classes.searchIcon}>
          <AccountCircleIcon />
        </div>
        <InputBase
          placeholder="Nombre del cliente o de la orden es requerido"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'client' }}
          value={clientName}
          onChange={onSetClient}
        />
      </div>
    </Toolbar>
  );
};

ToolBar.propTypes = {
  onSetClient: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired,
};

export default ToolBar;
