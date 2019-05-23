import React from 'react';
import MenuItem from './menuItems.jsx';

// Holds the sub menu items
const MenuTypeContainer = (props) => {

  // Gives us the entire menu items
  // console.log(props.items[0].single_menu);
  let uniqueKey = 0;
  // console.log('THIS IS COMING FROM MENUTYPECONTAINER:', props.items);
  const menuItems = props.items.map(menuComp => {
    uniqueKey++;
    return <MenuItem key={uniqueKey} item={menuComp} />;
  });

  // randomly select one object within the array of data for use when displaying the single menu choice
  let randomSingleMenu = props.items[Math.floor(Math.random() * props.items.length)];
  // console.log(randomSingleMenu); Gives back 1 object from the array


  const styles = {
    headerDiv: {
      margin: 0,
      marginBottom: '16px',
    },
    header: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      margin: 0,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      padding: 0,
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
    },
    container: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      columnCount: 2,
      columnGap: '32px',
      paddingBottom: '45px',
    },
    mainContainer: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      borderBottom: '1px solid #d8d9db',
    }
  };

  return (
    <div styler={styles.mainContainer}>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{randomSingleMenu.single_menu}</h3> 
      </div>
      <div style={styles.container}>
        {menuItems}
      </div>
    </div>
  );
};

export default MenuTypeContainer;