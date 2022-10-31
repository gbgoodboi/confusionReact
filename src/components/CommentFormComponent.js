import { Component } from "react";
import { ModalBody, Button, Modal, ModalHeader, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourname: '',
            rating: '',
            comment: '',
            isModalOpen: false     
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil fa-lg'></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                    <LocalForm>
                            <Row className="form-group mb-2">
                                <Label htmlFor="rating" className="font-weight-bold">Rating</Label>
                                <Col md={20}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option> 
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label htmlFor="yourname">Your Name</Label>
                                <Col md={20}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".yourname"
                                    show='touched'
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label htmlFor="comment">Comment</Label>
                                <Col md={20}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows='10'
                                        className="form-control"   
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Col md={{ size: 10}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;