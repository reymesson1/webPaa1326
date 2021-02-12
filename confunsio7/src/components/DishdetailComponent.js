import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// const menu;

export class DishDetail extends Component{

    constructor(props){
        super(props);

    }

    onDishSelect(dish){

        this.setState({
            selectedDish : dish
        })
    }


    renderDish(dish){
        if(dish != null){

            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            );
        }else{
            return(
                <div>

                </div>
            );
        }
    }

    renderDetail(dishes){
        console.log(dishes);

        let arrDish =  dishes.map((dish)=>{
            console.log(dish);
            
            return(
                    
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.onDishSelect(dish)} >
                             <CardImg width="100%" src={dish.image} alt={dish.name}/>
                             <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>

            )
        })

                return(
                    <div className="row" >{arrDish}</div>
                )

    }



    render(){

        return(
            <div className="container">
                <div className="row">
                    {this.renderDetail(this.props.dishes)}
                </div>
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                
            </div>
        );
    }

}



export default DishDetail;