import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './menuItems.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
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
          <MenuItem menu={this.state.menu} />
        </div>
      </div>
    );
  }


}

export default Menu;