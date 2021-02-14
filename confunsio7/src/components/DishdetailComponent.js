import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    function RenderComments({comments}) {
        console.log(comments);
        if (comments != null) {
            const comments = comments.map((comment) => {
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
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home" >Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu" >Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <RenderDish 
                        dish={props.dish}
                        
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments 
                        dish={props.dish}
                        />
                    </div>
                </div>
            </div>

        );
    }


export default DishDetail;