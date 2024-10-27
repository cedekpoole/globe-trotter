import PropTypes from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

function CountryItem({ country }) {
  return (
    <li className="flex gap-5 p-2 bg-[#302e2e] border-r-2 border-[#2A8D3F] shadow-md rounded-l-md rounded-r-sm items-center">
      <p className="text-xl">{country.emoji}</p>
      <p className="font-semibold">{country.country}</p>
    </li>
  );
}

export default CountryItem;
