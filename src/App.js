import React from 'react';

import MenuContainer from './containers/MenuContainer';
import TicketContainer from './containers/TicketContainer';
import AppBarContainer from './containers/AppBarContainer';
import jsonState from './menu.json'

import "./App.css"

function App() {
  return (
    <div className="App">
      <AppBarContainer />
      <MenuContainer
        items={jsonState}
      />
      <TicketContainer />
    </div>
  );
}

export default App
