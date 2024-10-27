import PropTypes from "prop-types";

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className="flex justify-between py-2 px-3 bg-[#302e2e] rounded-lg">
      <p>{emoji}</p>
      <h2>{cityName}</h2>
      <time>{formatDate(date)}</time>
    </li>
  );
}

export default CityItem;
