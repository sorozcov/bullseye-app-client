import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { BASE_API_URL,API_KEY, CLIENT_ID } from "../../config";
import axios from "axios";

export default function LocationsList(){

    // States to manage locations and loading
    const [locations,setLocations] = useState([]);
    const [areLocationsLoading,setAreLocationLoading] = useState(false);

    // TODO Optimize search as it can be paginated
    // Function to refresh locations from API
    const refreshLocations = async ()=>{
        try{
            setAreLocationLoading(true);
            const params = {ClientId:CLIENT_ID,ApiKey:API_KEY,StartIndex:0,PageSize:50,CountryID:1};
            const response = await axios.get(`${BASE_API_URL}/restsearch.svc/dosearch2`,{params});
            if(response.status===200){
                setLocations(response.data.ResultList);
            }else{
                alert("Error loading locations")
            }
            setAreLocationLoading(false);
        }catch(e){
            setAreLocationLoading(false);
            console.log(e);
        }
    };

    // Get locations the first time on build
    useEffect(()=>{
        refreshLocations();
    },[])

    return (
    <div style={{marginTop:'3vh',marginLeft:'5vw',marginRight:'2vw',marginBottom:'5vh'}}>
        {areLocationsLoading ? <Spinner/> : <><Row>
            <Col sm={12} md={4}>
                {locations.map(loc=>loc.Address1)}
            </Col>
            <Col sm={12} md={8}>
                Here goes the map
            </Col>
            </Row></>}
    </div>
    )
}