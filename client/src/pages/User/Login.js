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
    // Setting our component's initial state
    const [cars, setCars] = useState([])
    const [formObject, setFormObject] = useState({
    })

    // Load all books and store them with setBooks
    useEffect(() => {
        loadCars()
    }, [])

    // Loads all books and sets them to books
    function loadCars() {
        API.getCars()
            .then(res =>
                setCars(res.data)
            )
            .catch(err => console.log(err));
    };


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveCar({
                model: formObject.model,
                make: formObject.make,
                year: formObject.year
            })
                .then(() => setFormObject({
                    model: "",
                    make: "",
                    year: ""
                }))
                .then(() => loadCars())
                .catch(err => console.log(err));
        }
    };

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



                        <FormBtn
                            // disabled={!(formObject.model && formObject.make)}
                            onClick={handleFormSubmit}
                        >
                            Sign Up
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
