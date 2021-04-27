import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input} from "../../components/Form";
import { useHistory } from "react-router-dom";
// import { GoogleLogin } from 'react-google-login';
import GoogleBtn from "../../components/GoogleBtn"
import Welcome from "../../components/Welcome"
import signupIMG from "../../images/signup.png"

function SignUp() {
    // Setting our component's initial state
    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({
    })

    const History = useHistory();

    function loadUser() {
        API.getUser()
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };



    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };


    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email) {
            API.saveUser({
                name: formObject.name,
                email: formObject.email,
                password: formObject.password
            })
                .then(() => setFormObject({
                    name: "",
                    email: "",
                    password: ""
                }))
                .then(() => {
                    loadUser();
                    History.push("/cars")
                })

                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Welcome></Welcome>
            <Row>
                <Col size="md-12">
                    <img className="signupIMG" src={signupIMG} alt="sign up image.."></img>
                </Col>
            </Row>


            <Row>


                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card mx-auto">
                                <div className="card-body">
                                    <h1
                                        className="card-title"
                                        style={{ borderBottom: "1px solid #efefef" }}
                                    >
                                        Sign Up Here
                </h1>
                                    <form>
                                        <Input
                                            onChange={handleInputChange}
                                            name="name"
                                            placeholder="Add Your Full Name"
                                            value={formObject.name}
                                        />
                                        <Input
                                            onChange={handleInputChange}
                                            name="email"
                                            placeholder="Add Your Email"
                                            value={formObject.email}
                                        />
                                        <Input
                                            onChange={handleInputChange}
                                            name="password"
                                            placeholder="Create A Password"
                                            value={formObject.password}
                                        />

                                        <button type="submit" className="btn btn-danger" onClick={handleFormSubmit}>
                                            Sign Up
        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </Row>
        </Container>
    );
}


export default SignUp;
