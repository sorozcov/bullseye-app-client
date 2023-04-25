import { Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

/* -------------------------------------------------------------------------- */
/*                         Locations Marker Component                         */
/* -------------------------------------------------------------------------- */
export default function LocationMarker(props){
    let {Latitude,Longitude,Name,Address1,City,State,PostCode,CountryCode,URL} = props;
    return (<>
    <Marker position={[Latitude,Longitude]}>
        
            <Popup>
             Location: {Name} <br />
             Address: {`Address: ${Address1}, ${City} ${State},${PostCode},${CountryCode}`} <br />
             URL: <a href={URL}>{URL}</a> <br />
            </Popup>
    </Marker>
    
    </>)
}