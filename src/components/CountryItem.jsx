import PropTypes from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

function CountryItem({ country }) {
  return (
    <li className="flex gap-3">
      <p>{country.emoji}</p>
      <p>{country.country}</p>
    </li>
  );
}

export default CountryItem;
