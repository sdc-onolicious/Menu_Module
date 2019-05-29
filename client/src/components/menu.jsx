import React, {Component} from 'react';
import axios from 'axios';
import MenuContainer from './menuContainer.jsx';
import MenuButtonContainer from './menuButtonContainer.jsx';
import Carousel from './carousel.jsx';

// Will be the the actual full menu
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      restaurantLoaded: false,
      menuItems: [],
    };
  }
 
  // Client get route for menu
  componentDidMount() {
    // console.log('DATA!!!!');
    axios.get('http://localhost:3040/menu')
      // on success
      .then((data) => {
        // update the state with the returned data from the server
        // console.log('DATA!!!!', data.data);
        this.setState({
          menu: data.data,
          restaurantLoaded: true,
          menuItems: data.data,
        });
      })
      // Have a catch for erros
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    const styles = {
      base: {
        fontFamily: 'Brandon-Bold, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '32px',
        color: '#2d333f',
        borderBottom: '1px solid #d8d9db',
        paddingBottom: '16px',
        margin: '0 0 0 0',
        display: 'flex',
        justifyContent: 'space-between'
      },
      footer: {
        fontSize: '10px'
      }
    };

    // borderTop: '1px solid #d8d9db' adds the gray line
    return (
      <div id="menu" style={{width: '640px', marginLeft: 'auto', marginRight: 'auto'}}>
        <h2 style={styles.base}>Menu</h2>
        {this.state.restaurantLoaded && (<MenuButtonContainer menus={this.state.menuItems} clickMenu='menu'/>)}
        {this.state.restaurantLoaded && (<MenuContainer items={this.state.menuItems}/>)}
        <div className='footer' style={{fontSize: '10px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          Last updated: April 27, 2019 
          <div className='menu-provider' style={{display: 'flex', alignItems: 'center', paddingTop: '16px', paddingBottom: '16px'}}>
            <img src="https://a.singleplatform.com/OpenTable/kinjo-2/provided_by_2.png?sp_dt=20190427" alt="Single Platform"></img>
          </div>
        </div>
        <div className='carousel'>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Menu;