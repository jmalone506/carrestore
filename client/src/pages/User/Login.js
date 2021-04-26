import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"
import loginIMG from "../../images/login.png";
import "./style.css";
// import { GoogleLogin } from 'react-google-login';
// import GoogleBtn from "../../components/GoogleBtn"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault(event);
        console.log(this.state);
    }
    clearForm() {
        this.setState({
            email: "",
            password: ""
        });
    }
    render() {
        return (
            <div className="loginPage"><Welcome></Welcome>
                <Row>
                    <Col size="md-12">
                        <img className="loginIMG" src={loginIMG} alt="login image.."></img>
                    </Col>
                </Row>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card mx-auto">
                                <div className="card-body">
                                    <h1
                                        className="card-title"
                                        style={{ borderBottom: "1px solid #efefef" }}
                                    >
                                        Login Form
                </h1>
                                    <form
                                        className="needs-validation"
                                        noValidate
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required
                                                placeholder="Enter email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                            <small id="emailHelp" className="form-text text-muted">
                                                We'll never share your email with anyone else.
          </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Login
        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary float-right"
                                            onClick={this.clearForm}
                                        >
                                            Clear
        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
</div>
                 



                </div>
        );
    }
}




export default Login
