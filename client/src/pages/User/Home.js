import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Background from "../../assets/images/Background-1.jpg"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Button from "../../components/Button"


function Home() {
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
      
  





      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Image</h1>
          </Jumbotron>
        </Col>
      </Row>


      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1>About Car Hacks</h1>
           
          </Jumbotron>

        </Col>
        <Col size="md-4 sm-12">
          

        </Col>
      </Row>

      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1></h1>

          </Jumbotron>

        </Col>
        <Col size="md-4 sm-12">
          <Jumbotron>
            <h1></h1>
          </Jumbotron>
     
          

      

        </Col>
      </Row>
    </Container>
  );
}


export default Home;
