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
    if (menuComp.id <= 8) {
      return <MenuItem key={uniqueKey} item={menuComp} />;
    }
  });

  const menuItems2 = props.items.map(menuComp => {
    uniqueKey++;
    if (menuComp.id > 8 && menuComp.id < 20) {
      return <MenuItem key={uniqueKey} item={menuComp} />;
    }
  });

  const menuItems3 = props.items.map(menuComp => {
    uniqueKey++;
    if (menuComp.id > 20 && menuComp.id < 40) {
      return <MenuItem key={uniqueKey} item={menuComp} />;
    }
  });

  const menuItems4 = props.items.map(menuComp => {
    uniqueKey++;
    if (menuComp.id > 40 && menuComp.id < 60) {
      return <MenuItem key={uniqueKey} item={menuComp} />;
    }
  });
  // randomly select one object within the array of data for use when displaying the single menu choice
  // console.log(randomSingleMenu); Gives back 1 object from the array
  // console.log(props.items[1].single_menu_item);

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
      paddingBottom: '75px'
    },
    mainContainer: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      borderBottom: '1px solid #d8d9db',
    }
  };

  // borderTop: '1px solid #d8d9db'
  return (
    <div styler={styles.mainContainer}>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{props.items[1].single_menu_item}</h3> 
      </div>
      <div style={{fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        columnCount: 2, columnGap: '32px', paddingBottom: '32px'}}>
        {menuItems}
      </div>
      <div className='border' style={{borderTop: '1px solid #d8d9db', display: 'block'}}></div>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{props.items[25].single_menu_item}</h3> 
      </div>
      <div style={{fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        columnCount: 2, columnGap: '32px', paddingBottom: '25px'}}>
        {menuItems2}
      </div>
      <div className='border' style={{borderTop: '1px solid #d8d9db', display: 'block'}}></div>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{props.items[50].single_menu_item}</h3> 
      </div>
      <div style={{fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        columnCount: 2, columnGap: '32px', paddingBottom: '32px'}}>
        {menuItems3}
      </div>
      <div className='border' style={{borderTop: '1px solid #d8d9db', display: 'block'}}></div>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{props.items[75].single_menu_item}</h3> 
      </div>
      <div style={styles.container}>
        {menuItems4}
      </div>
    </div>
  );
};

export default MenuTypeContainer;