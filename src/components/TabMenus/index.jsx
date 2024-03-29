import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuList from './MenuList';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "70%",
    padding: "0 10px"
  },
  tab: {
    overflow: "auto",
    height: "calc(100vh - 130px)"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TanMenus = ({ items, onAddItem, onRemoveItem }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="Desayunos" {...a11yProps(0)} />
          <Tab label="Comidas" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tab} value={value} index={0} dir={theme.direction}>
        <MenuList
          items={items}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
          foodType="breackfast"
        />
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={1} dir={theme.direction}>
        <MenuList
          items={items}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
          foodType="lunch"
        />
      </TabPanel>
    </div>
  );
}

TanMenus.propTypes = {
  items: PropTypes.array.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default TanMenus
