import logo from '../logo.svg';
import '../App.css';
import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import About from './AboutComponent';

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

    const DishWithId = ({match}) =>{

      return(

        <DishDetail
          dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10)) [0]}
             comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))          
          }
        />
      );

    }

    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route path="/contactus" component={Contact}/>
            <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
            <Redirect to="/home"/> 
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
