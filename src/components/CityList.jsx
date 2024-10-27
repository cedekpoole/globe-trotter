import CityItem from "./CityItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CityList({ cities, isLoading }) {
  if (isLoading) return <Loader />;
  return (
    <ul className="flex flex-col gap-2">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
