import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import CommentForm from './CommentFormComponent';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comment, addComment, dishId }) {
    if (comment == null) {
        return <div></div>
    }
    const cmt = comment.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    })
    
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            <ul className='list-unstyled'>
                {cmt}
            </ul>
            <div>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        </div>
    )
}

const DishDetail = (props) => {
    if (props.dish == null) {
        return <div></div>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments comment={props.comments} 
                addComment={props.addComment} dishId={props.dish.id}
                />
            </div>
        </div>
    );
}

export default DishDetail