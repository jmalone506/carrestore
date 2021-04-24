import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Background from "../../assets/images/Background-1.jpg"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ReactDOM from "react-dom";
// import { GoogleLogin } from 'react-google-login';
import GoogleBtn from "../../components/GoogleBtn/"
import Welcome from "../../components/Welcome"

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Container fluid>
            <Welcome></Welcome>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Image</h1>
                    </Jumbotron>
                </Col>
            </Row>


            <Row>
                <Col size="md-3 p-3">

                </Col>

                <Col size="md-6 sm-12">

                    <h1>Login</h1>
                    <br></br>
                    <GoogleBtn>Login Through Google</GoogleBtn>
                    <br></br>
                    <p>or</p>
                    <form>

                        <Input
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />



                        <FormBtn
                            disabled={!validateForm()}
                            onClick={handleSubmit}
                        >
                            Login
              </FormBtn>
                    </form>

                </Col>
                <Col size="md-3">


                </Col>
            </Row>
        </Container>
    );
}


export default SignUp;
