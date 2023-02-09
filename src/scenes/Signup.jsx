import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "../components/Header"
import SignupForm from "../components/SignupForm"

export default function Signup(){
    return (
        <>
        <Container className="p-2 custom-login">
            <Row>
                 <Col><Header title="Sign Up"/></Col>
            </Row>

            <Row>
                <Col> < SignupForm /> </Col>
            </Row>
        </Container>
        </>
    )
}