import { useEffect, useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { API_KEY, BASE_API_URL, CLIENT_ID } from "../../config";


/* ----------------------- Locations Filter Component ----------------------- */
export default function LocationsFilter({search, countryFilter,setCountryFilter,zipCodeFilter,setZipCodeFilter,radiusFilter,setRadiusFilter}){
  //TODO Improve Filter component to be more dynamic and accessible.
  
  //Get Countries List Options. This could also be in a separated component
  const [countries,setCountriesOptions] = useState([]);

  // Load countries only the first time.
  useEffect(()=>{
    const  getCountriesOptions = async()=>{
      const params = {ClientId:CLIENT_ID,ApiKey:API_KEY};
      const response = await axios.get(`${BASE_API_URL}/restsearch.svc/getCountryList?`,{params});
      if(response.status==200){

          setCountriesOptions(response.data);
          setCountryFilter(response.data.length>0 ? response.data[0].Id : "1")
      }else{
          alert("Error loading countries")
      }
    }
    getCountriesOptions();
  },[])

  return (
    <>
     <Accordion defaultActiveKey="0" style={{marginTop:'2vh',marginBottom:'1vh'}} >
        <Accordion.Item eventKey="0">
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>

            <Form onSubmit={(e)=>{e.preventDefault(); 
              // if(zipCodeFilter.toString().length!==5){
               
              //   e.preventDefault();
              //   e.stopPropagation();
              // }else{
              //   search();
              // }
              search();
          
              
              }}>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Select aria-label="Select Country" 
                        value={countryFilter}  
                        onChange={(e)=>setCountryFilter(e.target.value)}
                        >
                        {countries.map(country=>(<option key={country.Id} value={country.Id}>{country.Name}</option>))}
                      </Form.Select>
                      
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3" >
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="number" min={0} placeholder="XXXXX"  
                        required
                        value={zipCodeFilter}
                        onChange={(e)=>setZipCodeFilter(e.target.value)}
                        />
                      
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group className="mb-3" >
                      <Form.Label>Radius</Form.Label>
                      <Form.Select aria-label="Select Radius" 
                        value={radiusFilter}  
                        onChange={(e)=>setRadiusFilter(e.target.value)}
                        >
                        <option key={5} value="5">5</option>
                        <option key={10} value="10">10</option>
                        <option key={30} value="30">30</option>
                        <option key={50} value="50">50</option>
                        <option key={100} value="100">100</option>
                      </Form.Select>
                      
                  </Form.Group>
                </Col>
              </Row>
                
              
                    <Button variant="primary" type={"submit"} style={{marginRight:'0.5vw'}} >
                        {'Search'}
                    </Button >
                   
              
            </Form>

            </Accordion.Body>
            
        </Accordion.Item>
        
        </Accordion>
    </>
    )
}