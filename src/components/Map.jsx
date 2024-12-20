import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import PropTypes from "prop-types";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import User from "./User";

ChangeCenter.propTypes = {
  position: PropTypes.array.isRequired,
};

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const [mapLat, mapLng] = useUrlPosition();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <main className="w-full lg:w-2/3 p-6 h-screen flex-1 relative">
      {!geolocationPosition && (
        <button
          className="absolute left-1/2 transform -translate-x-1/2 z-[1000] shadow-lg bottom-20  py-2 px-3 rounded bg-[#242424] duration-200 ease-in-out hover:bg-[#3e3e3e] hover:text-gray-200 hover:scale-105"
          onClick={getPosition}
        >
          {isLoadingPosition ? "Loading..." : "Get My Location"}
        </button>
      )}
      <User />
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className=" min-h-[400px] h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </main>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`/app/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
