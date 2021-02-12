import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

export class DishDetail extends Component{

    constructor(props){
        super(props);

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

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <ul className="list-unstyled">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(new Date(comment.date))}</p>
                    </ul>
                );
            });
            return (comments);
        }
        else {
            return (
                <div></div>
            );
        }
    }


    render(){

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Reviews</h4>
                    {/* {this.renderComments(this.props.selectedDish)} */}
                </div>
            </div>

        );
    }
}

export default DishDetail;