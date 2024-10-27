import { useParams, useSearchParams } from "react-router-dom";

function City() {
  const [searchParams, setSearchParams] = useSearchParams();

  const coordinates = {
    lat: searchParams.get("lat") || 0,
    lng: searchParams.get("lng") || 0,
  };
  const { id } = useParams();
  const currentCity = {
    cityName: "City Name",
    date: "2027-10-3T10:00:00",
    emoji: "🏙",
    notes: "City notes",
  };

  const { cityName, date, emoji, notes } = currentCity;
  return (
    <div>
      <h1>CITY {id}</h1>
      <p>
        Position: {coordinates.lat}, {coordinates.lng}
      </p>
    </div>
  );
}

export default City;
