
import './App.css';
import 'leaflet/dist/leaflet.css';
import LocationsList from './components/LocationsList';
import NavbarBullseye from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarBullseye/>
      <LocationsList/>
    </div>
  );
}

export default App;
