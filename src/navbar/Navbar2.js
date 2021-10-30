import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
function Navbar2(){
    return(
        <>
<Container>
  <Row>
    <Col sm={4}>
    <Link to="/home2">Home</Link>
    </Col>
    <Col sm={4}>
    <Link to="/post">post</Link>
    </Col>
    <Col sm={4}>
    <Link to="/StudentData">add data</Link>
    </Col>
  </Row>
</Container>
    </>
    )
}
export default Navbar2