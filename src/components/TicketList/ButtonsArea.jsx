import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { green, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  areaButtonsBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0 0 0",
  },
  sendButton: {
    color: "#fff",
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[400],
    },
  },
  cleanButton: {
    color: "#fff",
    backgroundColor: red[300],
    '&:hover': {
      backgroundColor: red[400],
    },
  },
  buttonProgress: {
    color: green[900],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

const ButtonsArea = ({ onSendOrder, onCleanOrder, isMenuClean, clientName, loading }) => {
  const classes = useStyles();
  return (
    <div className={classes.areaButtonsBox}>
      <Button
        className={classes.sendButton}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={onSendOrder}
        disabled={isMenuClean || (clientName === "")}
      >
        Enviar Orden
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}</Button>
      <Button
        className={classes.cleanButton}
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={onCleanOrder}
        disabled={isMenuClean && (clientName === "")}
      >
        Limpiar Orden
      </Button>
    </div>
  );
};

ButtonsArea.propTypes = {
  onSendOrder: PropTypes.func.isRequired,
  onCleanOrder: PropTypes.func.isRequired,
  isMenuClean: PropTypes.bool.isRequired,
  clientName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ButtonsArea
