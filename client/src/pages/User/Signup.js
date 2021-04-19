import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Background from "../../assets/images/Background-1.jpg"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Type from "./Type"
import ReactDOM from "react-dom";

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
            <div styles={{ backgroundImage: `url(${Background})` }}>
            </div>

            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Image</h1>
                    </Jumbotron>
                </Col>
            </Row>


            <Row>
                <Col size="md-4 p-3">
                    <Jumbotron>
                        <h1>About Car Hacks</h1>
                    </Jumbotron>

                </Col>
                <Col size="md-4">
                    <Jumbotron>
                    <h1>About Car Hacks</h1>
                </Jumbotron>

                </Col>
                <Col size="md-4 sm-12">
                    <Jumbotron>
                        <h1>Sign Up</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="fullName"
                            placeholder="Add Your Full Name"
                            value={formObject.model}
                        />
                        <Input
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Add Your Email"
                            value={formObject.model}
                        />
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Create A Password"
                            value={formObject.make}
                        />
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>What's your level of Car Experience?</option>
                            <option value="1">Beginner</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Expert</option>
                        </select>
                        <FormBtn
                            // disabled={!(formObject.model && formObject.make)}
                            onClick={handleFormSubmit}
                        >
                            Sign Up
              </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}


export default SignUp;
