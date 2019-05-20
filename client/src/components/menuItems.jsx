import React from 'react';

const MenuItem = (props) => (
  <li>
    <span> {props.dish.dish_name} </span>
    <span> {props.dish.dish_descirption} </span>
  </li>
);
  
export default MenuItem;