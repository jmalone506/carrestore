import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import loginIMG from "../../images/login.png";
import Axios from "axios";


import "./style.css";
// import { GoogleLogin } from 'react-google-login';
// import GoogleBtn from "../../components/GoogleBtn"


function Login() {
    const [user, setUser] = useState([])
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const History = useHistory();

    function loadUser() {
        API.getUser()
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };

    const loginUser = () => {


        Axios({
            method: "POST",
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:3002/cars",
        }).then(() => {
            loadUser();
            History.push("/cars")
        })
            .catch(err => console.log(err));
    };



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
                                    onSubmit={loginUser}
                                >
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            required
                                            placeholder="Enter email"
                                            onChange={setloginEmail}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            required
                                            placeholder="Password"

                                            onChange={setLoginPassword}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" >
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
