import React from 'react';
import MenuItem from './menuItems.jsx';

// Holds the menu types aka Breakfast, Lunch etc.
const MenuTypeContainer = (props) => {

  // Gives just 1 menu need multiple
  console.log(props.items[0].single_menu);

  // console.log('THIS IS COMING FROM MENUTYPECONTAINER:', props.items);
  const menuItems = props.items.map(menuComp => {
    return <MenuItem key={props.items.id} item={menuComp}/>;
  });


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
        <h3 className="menuTypeHeader" style={styles.header}>{props.items[0].single_menu}</h3>
      </div>
      <div style={styles.container}>
        {menuItems}
      </div>
    </div>
  );
};

export default MenuTypeContainer;