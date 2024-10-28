import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
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
        scrollWheelZoom={false}
        className=" min-h-[400px] h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}

export default Map;
