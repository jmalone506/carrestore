import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import loginIMG from "../../images/login.png";
import { Input } from "../../components/Form";

import "./style.css";
// import { GoogleLogin } from 'react-google-login';
// import GoogleBtn from "../../components/GoogleBtn"


function Login() {
    // Setting our component's initial state
    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const History = useHistory();

    function handleInputChange() {
        return email.length > 0 && password.length > 0;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email) {
            API.getUser({
                email: formObject.email,
                password: formObject.password
            })
                .then(() => setFormObject({
                    name: "",
                    email: "",
                    password: ""
                }))
                .then(() => {
                    History.push("/cars")
                })

                .catch(err => console.log(err));
        }
    }








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
                                <form>

                                    <Input

                                        onChange={handleInputChange}
                                        name="email"
                                        placeholder="Type in your email"
                                        value={formObject.email}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        required
                                        placeholder="Password"
                                        value={formObject.password}
                                        onChange={handleInputChange}
                                    />

                                    <button type="submit" className="btn btn-info" onClick={handleFormSubmit}>
                                        Login
        </button>


                                    <p>Don't have an account? <a href="./signup">Sign up Here!</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}



export default Login
