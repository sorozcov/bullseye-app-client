import { Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function LocationMarker(location){
    return (<>
    <Marker position={[location.Latitude,location.Longitude]}>
            <Popup>
             Location: {location.Name} <br />
             Address: {`Address: ${location.Address1}, ${location.City} ${location.State},${location.PostCode},${location.CountryCode}`} <br />
             Location: <a href={location.URL}>{location.URL}</a> <br />
            </Popup>
    </Marker>
    
    </>)
}