import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";

function Detail(props) {
  const [note, setNote] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()

  useEffect(() => {
    API.getNote(id)
      .then(res => {
        console.log(res.data);
        setNote(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Navbar />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 >
              {note.title} by {note.author}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
     
        <Col size="md-10 md-offset-3">
          
            <article>
            <h1 style={{ color: "white" }} >Note</h1>
            <p style={{ color: "white" }}>
              {note.body}
            </p>
          </article>
        
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/notes"><p style={{ color: "white" }}>← Back to Note Page</p></Link>
        </Col>
      
      </Row>
    </Container>
  );
}


export default Detail;
