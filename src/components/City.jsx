import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import BackBtn from "./BackBtn";
import Loader from "./Loader";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function City() {
  const { id } = useParams();
  const { getCityByID, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCityByID(id);
  }, [id]);

  const { cityName, date, emoji, notes } = currentCity;

  if (isLoading) return <Loader />;

  return (
    <div className="bg-[#302e2e] p-5 rounded-md shadow-md flex flex-col gap-4">
      <div>
        <h6 className="text-xs">CITY NAME</h6>
        <h3 className="font-bold text-2xl">
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div>
        <h6 className="text-xs">YOU WENT TO {cityName.toUpperCase()} ON </h6>
        <p className="font-semibold text-xl">{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div>
          <h6 className="text-xs">YOUR NOTES</h6>
          <p className=" text-lg">{notes}</p>
        </div>
      )}

      <div>
        <h6 className="text-xs">LEARN MORE</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="underline text-[#2A8D3F]"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className="flex justify-end">
        <BackBtn>&larr;</BackBtn>
      </div>
    </div>
  );
}

export default City;
