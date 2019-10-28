import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  }
}));

const DividerLine = ({ variant = false, text = "" }) => {
  const classes = useStyles();

  return (
    <div>
      <Divider component="li" variant={variant ? "inset" : "fullWidth"} />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          {text}
        </Typography>
      </li>
    </div>
  );
};

DividerLine.propTypes = {
  variant: PropTypes.bool,
  text: PropTypes.string,
};

export default DividerLine
