import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
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

    function RenderComments({dish}) {
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


    const DishDetail = (props) =>{

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                   <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments dish={props.dish}/>
                </div>
            </div>

        );
    }


export default DishDetail;