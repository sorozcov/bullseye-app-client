import { Accordion, Button, Col, Form, Row } from "react-bootstrap";

export default function LocationsFilter({countriesFilter,setCountriesFilter,zipCodeFilter,setZipCodeFilter,radiusFilter,seRadiusFilter}){
    return (
    <>
     <Accordion defaultActiveKey="0" style={{marginTop:'2vh',marginBottom:'1vh'}} >
        <Accordion.Item eventKey="0">
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>

            <Form onSubmit={(e)=>{e.preventDefault();}}>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" min={0} placeholder="Enter Country"  
                        // required
                        // value={minPrice}
                        // onChange={(e)=>setMinPrice(e.target.value)}
                        />
                      
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3" >
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" min={0} placeholder="XXXXX"  
                        // required
                        // value={maxPrice}
                        // onChange={(e)=>setMaxPrice(e.target.value)}
                        />
                      
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3" >
                      <Form.Label>Radius</Form.Label>
                      <Form.Control type="radius" min={0} placeholder="Enter Radius"  
                        // required
                        // value={numberOfRooms}
                        // onChange={(e)=>setNumberOfRooms(e.target.value)}
                        />
                      
                  </Form.Group>
                </Col>
              </Row>
                
              
                    <Button variant="primary" type="submit" style={{marginRight:'0.5vw'}} >
                        {'Search'}
                    </Button >
                    {<Button variant="secondary" style={{color:'white',marginRight:'0.5vw'}} onClick={()=>{}}>
                        Reset Filter
                    </Button>}
              
            </Form>

            </Accordion.Body>
            
        </Accordion.Item>
        
        </Accordion>
    </>
    )
}