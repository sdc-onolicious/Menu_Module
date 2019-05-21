import React from 'react';

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
  // will need to format for styling to work

  // Grabbing what we need to display on for menuItems
  return (
    <div className="itemContainer" >
      <div className="itemPrice" >${price}</div>
      <div className="itemName">{item.dish_name}</div>
      <div className="itemDescription" >{item.dish_description}</div>
    </div>
  );

};
  
export default MenuItem;