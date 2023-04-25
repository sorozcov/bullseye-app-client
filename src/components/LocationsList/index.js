import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { BASE_API_URL,API_KEY, CLIENT_ID } from "../../config";
import axios from "axios";
import LocationCard from "../LocationCard";
import LocationsFilter from '../LocationsFilters';
import LocationsMap from "../LocationsMap";

const simulatedLatLngUser = [25.786939,-80.335411]; 

/* ------------------------ Locations List Component ------------------------ */
export default function LocationsList(){

    // States to manage locations and loading
    const [locations,setLocations] = useState([]);
    const [areLocationsLoading,setAreLocationLoading] = useState(false);

    const [countryFilter,setCountryFilter] = useState("1");
    const [zipCodeFilter,setZipCodeFilter] = useState();
    const [radiusFilter,setRadiusFilter] = useState("5");
    
    //State to change center position of map
    const [centerPosition,setCenterPosition]=useState(simulatedLatLngUser);
    
    // TODO Optimize search as it can be paginated
    // Function to refresh locations from API
    const refreshLocations = async ()=>{
        try{
            setAreLocationLoading(true);
            const params = {ClientId:CLIENT_ID,ApiKey:API_KEY,
                StartIndex:0,PageSize:50,
                Radius:radiusFilter,
                PostalCode:zipCodeFilter,
                CountryID:countryFilter};
            
            const response = await axios.get(`${BASE_API_URL}/restsearch.svc/dosearch2`,{params});
            if(response.status===200){
                let locationsResult = response.data.ResultList;
                locationsResult.sort((loc1,loc2)=>loc1.Distance-loc2.Distance) // Consistent sort by distance
                setCenterPosition(simulatedLatLngUser);
                setLocations(locationsResult);
            }else{
                setLocations([]);
                alert("Error loading locations")
            }
            setAreLocationLoading(false);
        }catch(e){
            setLocations([]);
            setAreLocationLoading(false);
            console.log(e);
        }
    };

    return (
    <div style={{marginTop:'3vh',marginLeft:'2vw',marginRight:'2vw',marginBottom:'5vh'}}>
        { <>
        <Row>
            <LocationsFilter 
                countryFilter={countryFilter} 
                setCountryFilter={setCountryFilter} 
                radiusFilter={radiusFilter} 
                setRadiusFilter={setRadiusFilter} 
                zipCodeFilter={zipCodeFilter} 
                setZipCodeFilter={setZipCodeFilter} 
                search={refreshLocations}/>
        </Row>
        {areLocationsLoading ? <Spinner/> : locations.length==0 ? "No locations to show.": <Row>
            <Col sm={12} md={5} style={{overflowY:'scroll',height:'71vh'}}>
                {locations.map(location=><LocationCard onClick={()=>{
                    setCenterPosition([location.Latitude,location.Longitude])
                }} key={location.Id} {...location} />)}
            </Col>
            <Col sm={12} md={7}>
                <div style={{height:'71vh',width:'100%',display:'grid'}}>
                    <LocationsMap locations={locations} centerPosition={centerPosition}/>
                </div>
            </Col>
            </Row>
        }
            </>}
    </div>
    )
}