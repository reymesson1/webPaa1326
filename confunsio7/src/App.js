import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu  from './components/MenuComponent.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Dios</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}

export default App;
