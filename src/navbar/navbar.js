import react from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
function Navbar(){
    return(
        <>
    <div>
    <Container>
  <Row>
    <Col sm={3}>
        <Link to="/signin">signin</Link>
    </Col>
    <Col sm={3}>
        <Link to="/signUp">Signup</Link> 
    </Col>
    <Col sm={3}>
        <Link to="/Company">Company</Link>
    </Col>
    <Col sm={3}>
        <Link to="/admin/">Admin</Link>
    </Col>
  </Row>
</Container>
    </div>
    </>
    )
}

export default Navbar