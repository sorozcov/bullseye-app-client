import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { BASE_API_URL,API_KEY, CLIENT_ID } from "../../config";
import axios from "axios";
import LocationCard from "../LocationCard";

const simulatedLatLngUser = [31.619219,-84.217027]; 

export default function LocationsList(){

    // States to manage locations and loading
    const [locations,setLocations] = useState([]);
    const [areLocationsLoading,setAreLocationLoading] = useState(false);

    // TODO Optimize search as it can be paginated
    // Function to refresh locations from API
    const refreshLocations = async ()=>{
        try{
            setAreLocationLoading(true);
            //TODO We could do a wrapper for this axios endpoint as ClientId and ApiKey will most likely always be needed
            const params = {ClientId:CLIENT_ID,ApiKey:API_KEY,StartIndex:0,PageSize:50,CountryID:1,Latitude:simulatedLatLngUser[0],Longitude:simulatedLatLngUser[1],radius:5};
            const response = await axios.get(`${BASE_API_URL}/restsearch.svc/dosearch2`,{params});
            if(response.status===200){
                let locationsResult = response.data.ResultList;
                locationsResult.sort((loc1,loc2)=>loc1.Distance-loc2.Distance) // Consistent sort by distance
                setLocations(locationsResult);
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
    <div style={{marginTop:'3vh',marginLeft:'2vw',marginRight:'2vw',marginBottom:'5vh'}}>
        {areLocationsLoading ? <Spinner/> : <><Row>
            <Col sm={12} md={5} style={{overflowY:'scroll',height:'77vh'}}>
                {locations.map(location=><LocationCard  key={location.Id} {...location} />)}
            </Col>
            <Col sm={12} md={7}>
                Here goes the map
            </Col>
            </Row></>}
    </div>
    )
}