import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import BackBtn from "./BackBtn";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function City() {
  const { id } = useParams();
  const { getCityByID, currentCity } = useCities();

  useEffect(() => {
    getCityByID(id);
  }, [id]);

  const { cityName, date, emoji, notes } = currentCity;
  return (
    <div className="">
      <div className="">
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="">
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="">
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className="">
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackBtn>&larr;</BackBtn>
      </div>
    </div>
  );
}

export default City;
