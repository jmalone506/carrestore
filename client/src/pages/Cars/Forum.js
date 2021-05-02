import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import ForumIMG from "../../components/Header/Forum.js"

function Forum() {


    return (
        <Container fluid>

            <Navbar />

            <Row>
                <Col size="md-12">
                    < ForumIMG />
                </Col>
            </Row>


        </Container>
    );
}


export default Forum;
