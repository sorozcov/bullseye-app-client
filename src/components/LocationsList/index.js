import { Col, Container, Row } from "react-bootstrap";

export default function LocationsList(){
    return (
    <Container style={{marginTop:'2vh'}}>
        <Row>
            <Col sm={12} md={4}>
                Here goes the list
            </Col>
            <Col sm={12} md={8}>
                Here goes the map
            </Col>
        </Row>
    </Container>
    )
}