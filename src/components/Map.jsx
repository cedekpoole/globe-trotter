import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();

  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState({ lat: 51.505, lng: -0.09 });
  const [searchParams, setSearchParams] = useSearchParams();

  const coordinates = {
    lat: searchParams.get("lat") || 0,
    lng: searchParams.get("lng") || 0,
  };
  return (
    <main className="w-full lg:w-2/3 p-6 h-screen flex-1 relative">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className=" min-h-[400px] h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
}

export default Map;
