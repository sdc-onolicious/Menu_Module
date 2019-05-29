import React from 'react';
// Each menu item will have a dish name, dish description, and price
const MenuItem = (props) => {
  // Need to fix up styling
  const styles = {
    container: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      marginTop: 0,
      marginBottom: '16px',
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
    },
    description: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      marginTop: '8px',
      marginBottom: 0,
      fontWeight: 300,
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    price: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      float: 'right',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
    }
  };
  
  
  // console.log('THIS IS PROPS FROM MENUITEMS:', props.item.price_per_guest);
  
  // console.log(priceArray);
  // console.log(props.item.price_per_guest);

  // Grabbing what we need to display on for menuItems
  return (
    <div className="itemContainer" style={styles.container}>
      <div className="dishPrice" style={styles.price}>${props.item.price_per_guest}</div>
      <div className="dishName">{props.item.dish_name}</div>
      <div className="dishDescription" style={styles.description}>{props.item.dish_description}</div>
    </div>
  );

};
  
export default MenuItem;