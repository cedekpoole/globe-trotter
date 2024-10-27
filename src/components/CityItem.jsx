import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  const { cityName, emoji, date, id } = city;
  return (
    <li>
      <Link
        to={`${id}`}
        className="flex justify-between py-2 px-3 bg-[#302e2e] rounded-lg items-center"
      >
        <div className="flex gap-3 items-center">
          <p className="text-3xl">{emoji}</p>
          <h2>{cityName}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <time>{formatDate(date)}</time>
          <button className=" px-1.5 bg-[#1d1c1c] text-xl rounded-full">
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
