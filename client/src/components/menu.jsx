import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './menuItems.jsx';
import MenuButton from './menuButton.jsx';
import MenuContainer from './menuContainer.jsx';
import MenuButtonContainer from './menuButtonContainer.jsx';


// Will be the the actual full menu
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      restaurantLoaded: false,
      menuItems: [],
      restaurantId: 1,
      currentMenu: 0,
    };
  }

  // Client get route for menu
  getMenu() {
    axios.get('/menu')
      // on success
      .then((data) => {
        // update the state with the returned data from the server
        this.setState({menu: data.data});
      })
      // Have a catch for erros
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="menu">
          <h1>Menu</h1>
          <div>Hello World!</div>
        </div>
      </div>
    );
  }
}

export default Menu;