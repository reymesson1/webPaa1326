import logo from '../logo.svg';
import '../App.css';
import React, {Component} from 'react';
import Menu  from './MenuComponent.js';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/сomments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId){

      this.setState({
          selectedDish : dishId
      })
  }


  render() {

    const HomePage = () =>{

      return(
        <Home
          dish={this.state.dishes.filter( (dish) => dish.featured)[0]} 
          leaders={this.state.leaders.filter( (leader) => leader.featured)[0]}
          promotions={this.state.promotions.filter( (promo) => promo.featured)[0]}
        
        />
      );
    }

    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/contactus" component={Contact}/>
            <Redirect to="/home"/> 
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
