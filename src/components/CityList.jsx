import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Loader from "./Loader";
import Message from "./Message";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Loader />;

  if (!cities.length)
    return (
      <Message>
        Choose your first adventure by clicking on a city on the map!
      </Message>
    );
  return (
    <ul className="flex flex-col gap-2 max-h-[300px] overflow-auto">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
