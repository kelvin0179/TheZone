import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div style={{ textAlign: "center" }}>
                            <h1>Welcome to The Zone</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <h1 class="text-center mb-3">
                            <i class="fa fa-user-plus"></i> Register
                        </h1>
                        <Form>
                            <FormGroup style={{ marginTop: 12 }}>
                                <Label for="name" style={{ marginBottom: 5 }}>Name</Label>
                                <Input type="text" name="name" id="name"
                                    placeholder="Enter Your Name"></Input>
                            </FormGroup>
                            <FormGroup style={{ marginTop: 12 }}>
                                <Label for="email" style={{ marginBottom: 5 }}>Email</Label>
                                <Input type="email" name="email" id="email"
                                    placeholder="Enter Your Email"></Input>
                            </FormGroup>
                            <FormGroup style={{ marginTop: 12 }}>
                                <Label for="password" style={{ marginBottom: 5 }}>Password</Label>
                                <Input type="password" name="password" id="password"
                                    placeholder="Enter Your Password"></Input>
                            </FormGroup>
                            <FormGroup style={{ marginTop: 12 }}>
                                <Label for="password2" style={{ marginBottom: 5 }}>Confirm Password</Label>
                                <Input type="password" name="password2" id="password2"
                                    placeholder="Confirm Your Password"></Input>
                            </FormGroup>
                            <FormGroup style={{ marginTop: 12 }}>
                                <Button type="submit" color="primary">Register</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;