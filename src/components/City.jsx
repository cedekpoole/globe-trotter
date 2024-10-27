import { useParams } from "react-router-dom";

function City() {
  const { id } = useParams();
  const currentCity = {
    cityName: "City Name",
    date: "2027-10-3T10:00:00",
    emoji: "🏙",
    notes: "City notes",
  };

  const { cityName, date, emoji, notes } = currentCity;
  return <div>CITY {id} </div>;
}

export default City;
