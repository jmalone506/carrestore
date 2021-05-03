import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Welcome from "../../components/Welcome"
import loginIMG from "../../images/login.png";
import "./style.css";


// import GoogleBtn from "../../components/GoogleBtn"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("handleSubmit")

        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {

                    // update the state to redirect to home
                    this.setState({
                        redirectTo: "/cars"
                    })
                }
            }).catch(error => {

                console.log("login error: ")
                console.log(error);

            })
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="loginPage"><Welcome></Welcome>
                    <Row>
                        <Col size="md-12">
                            <img className="loginimg" src={loginIMG} alt="login image.."></img>
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
                                        <form>

                                            <Input

                                                onChange={this.handleChange}
                                                name="email"
                                                placeholder="Type in your email"
                                                value={this.state.email}
                                            />
                                            <Input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />

                                            <button type="submit" className="btn btn-info" onClick={this.handleSubmit}>
                                                Login
                                            </button>



                                        </form>
                                        <br></br>
                                        <p>Don"t have an account? </p>
                                        <a href="./signup"><button className="btn btn-secondary " >Sign Up Here!</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login
