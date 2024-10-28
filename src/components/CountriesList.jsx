import Loader from "./Loader";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();

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
