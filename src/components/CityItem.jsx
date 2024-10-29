import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();

  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`flex justify-between py-2 px-3 bg-[#302e2e] rounded-lg items-center ${
          currentCity.id === id ? "border-2 border-[#2A8D3F]" : ""
        }`}
      >
        <div className="flex gap-3 items-center">
          <p className="text-3xl">{emoji}</p>
          <h2>{cityName}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <time>{formatDate(date)}</time>
          <button
            onClick={handleClick}
            className=" px-1.5 bg-[#1d1c1c] text-xl rounded-full"
          >
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
