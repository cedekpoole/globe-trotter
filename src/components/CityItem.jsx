import PropTypes from "prop-types";

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

function CityItem({ city }) {
  return <li key={city.id}>CITY</li>;
}

export default CityItem;
