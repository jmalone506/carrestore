import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
// import { GoogleLogin } from 'react-google-login';
import GoogleBtn from "../../components/GoogleBtn/"
import Welcome from "../../components/Welcome"

function Login() {
    // const [email, setEmail] = useState("");
    // const [id, setId] = useState("");
    // const [formObject, setFormObject] = useState({
    // })

    // const History = useHistory();


    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.id && formObject.email) {
    //         API.getUser({
    //             id: formObject.id,
    //             email: formObject.email,
    //             password: formObject.password
    //         })
    //             .then(() => setFormObject({
    //                 name: "",
    //                 email: "",
    //                 password: ""
    //             }))
    //             .then(() => {
    //                 loadUser();
    //                 History.push("/cars")
    //             })

    //             .catch(err => console.log(err));
    //     }
    // }
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

                            {/* <Input
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

                                onClick={handleSubmit}
                            >
                                Login
              </FormBtn> */}
                        </form>

                    </Col>
                    <Col size="md-3">


                    </Col>
                </Row>
            </Container>
        );
}


export default Login
