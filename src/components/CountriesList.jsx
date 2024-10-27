import Loader from "./Loader";
import PropTypes from "prop-types";
import Message from "./Message";
import CountryItem from "./CountryItem";

CountriesList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CountriesList({ cities, isLoading }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { id: city.country, country: city.country, emoji: city.emoji },
      ];
    else return arr;
  }, []);
  if (isLoading) return <Loader />;

  if (!cities.length)
    return (
      <Message>
        Choose your first adventure by clicking on a city on the map!
      </Message>
    );
  return (
    <ul className="grid grid-cols-2 gap-3">
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
