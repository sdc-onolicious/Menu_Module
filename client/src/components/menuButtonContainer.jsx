// Will hold the menu buttons
import React from 'react';
import MenuButton from './menuButton.jsx';

const MenuButtonContainer = (props) => {
  let uniqueKey = 0;
  // console.log('menubuttonContainer props:', props.menus); <- Array of 100 objects
  const menuButton = <MenuButton key={uniqueKey} menu='menu'/>;

  return (
    <div>{menuButton}</div>
  );
};





export default MenuButtonContainer;