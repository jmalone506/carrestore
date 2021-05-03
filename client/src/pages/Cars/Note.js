import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar";


function Notes() {

    const [notes, setNotes] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        API.getNotes()
            .then(res => {
                console.log(res.data);
                setNotes(res.data);
            }).catch(err => console.log(err));
        }

    function deleteNote(id) {
        API.deleteNote(id)
            .then(res => loadNotes())
            .catch(err => console.log(err));
    }


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };


    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveNote({
                title: formObject.title,
                author: formObject.author,
                body: formObject.body
            })
                .then(res => loadNotes())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Navbar />
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Make A Note For Yourself</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title of Note"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="author"
                            placeholder="Your Name"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="body"
                            placeholder="Type your note here!"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Create Note
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Saved  Notes</h1>
                    </Jumbotron>
                    {notes.length ? (
                        <List>
                            {notes.map(note => (
                                <ListItem key={note._id}>
                                    <Link to={"/notes/" + note._id}>
                                        <strong>
                                            {note.title} by {note.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteNote(note._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
        </Container>
    );
}


export default Notes;
