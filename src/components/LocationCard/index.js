import { Card, Col, Row } from "react-bootstrap";




export default function LocationCard(location){
    let {Id,Name,Address1,PostCode,State,CountryCode, City,PhoneNumber,EmailAddress,URL,Distance,ContactName,CategoryNames,ContactURL,Latitude,Longitude} = location;
    return (
        <Card key={Id} style={{marginTop:'1.5vh',marginBottom:'1vh'}} border="danger">
            <Card.Header as="h5" style={{padding:'1vw'}}>
                <Row>
                    <Col sm={8} md={10}>
                            {Name}
                    </Col>
                    <Col sm={8} md={2} style={{display:'flex',justifyContent:'flex-end'}}>
                            {`${Distance}km`} 
                    </Col>
                        
                    
                </Row>
             
            </Card.Header>
            <Card.Body style={{padding:'1vw'}}>
                <Card.Title>{`Address: ${Address1}, ${City} ${State},${PostCode},${CountryCode}`}</Card.Title>
                
                <Card.Text style={{paddingLeft:'1vw'}}>
                        <Row>
                            <Col sm={12} md={12}>
                                URL:  <Card.Link href={URL}>{URL}</Card.Link> 
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                Phone:  <Card.Link href={`tel:${PhoneNumber}`}>{PhoneNumber}</Card.Link>
                            </Col>   
                            <Col sm={12} md={6}>
                                Email: <Card.Link href={`mailto:${EmailAddress}`}>{EmailAddress}</Card.Link>
                            </Col> 
                        </Row>

                     
                        {/* <Row>Contact Name: {ContactName ?? ""}</Row>
                        <Row> CategoryNames: {CategoryNames} </Row> */}
                </Card.Text>
                      
                        
                        
                        
             
            </Card.Body>
        </Card>
    )
}