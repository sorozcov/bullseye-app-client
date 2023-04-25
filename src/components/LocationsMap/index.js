import { MapContainer, TileLayer,useMap } from "react-leaflet";
import LocationMarker from "../LocationMarker";
import 'leaflet/dist/leaflet.css';


/* ----------------------- Locations Map using Leaflet ---------------------- */
export default function LocationsMap({centerPosition,locations}){
    return (
    <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map(location=>
        <LocationMarker key={location.Id} {...location}/>)
    }
    
    </MapContainer>
)
}