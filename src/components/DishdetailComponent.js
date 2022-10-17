import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comment}) {
        if (comment == null) {
            return <div></div>
        }
        const cmt = comment.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) }</p>
                </li>
            )
        })
        
        return (
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmt}
                </ul>
            </div>
        )
    }

    const DishDetail = (props) => {
        console.log('DishDetail Component render invoked')
        if (props.dish == null) {
            return <div></div>;
        }

        return (
            <div className='container'>
                <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish}></RenderDish>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments comment = {props.dish.comments}></RenderComments>
                </div>
            </div>
            </div>         
        );
    }

export default DishDetail