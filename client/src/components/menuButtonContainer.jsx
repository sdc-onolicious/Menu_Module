// Will hold the menu buttons
import React from 'react';
import MenuButton from './menuButton.jsx';

const MenuButtonContainer = (props) => {
  let uniqueKey = 0;
  // console.log('menubuttonContainer props:', props);
  const menuButton = props.menus.map(menu => {
    console.log(menu.single_menu);
    uniqueKey++;
    return <MenuButton key={uniqueKey} menu={menu}/>;
  });
  return (
    <div>{menuButton}</div>
  );
};





export default MenuButtonContainer;