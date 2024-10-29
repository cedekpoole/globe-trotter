import { useEffect, useState } from "react";
import BackBtn from "./BackBtn";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Loader from "./Loader";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const { createCity, isLoading } = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getCityName() {
      if (lat && lng) {
        try {
          setIsLoadingLocation(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "This area does not have city. Please try another location."
            );
          setCityName(data.city || data.locality || "");
          setCountry(
            data.countryCode === "GB" ? "United Kingdom" : data.countryName
          );
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingLocation(false);
        }
      }
    }
    getCityName();
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      notes,
      position: { lat, lng },
      emoji,
      id: uuidv4(),
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingLocation) return <Loader />;
  if (!lat && !lng)
    return <Message>Click on the map to add a new location!</Message>;
  if (geocodingError) return <Message>{geocodingError}</Message>;

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 bg-[#302e2e] rounded-lg p-4 shadow-md ${
        isLoading ? "pointer-events-none opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="cityName" className="font-light">
          CITY NAME
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="p-1 rounded"
        />
        <span className="absolute right-1 -top-1 text-3xl ">{emoji}</span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="font-light">
          WHEN DID YOU GO?
        </label>
        <div className="p-1 bg-black rounded">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            id="date"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="font-light">
          NOTES ABOUT YOUR ADVENTURE
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="p-1 rounded h-30 overflow-auto resize-none"
        />
      </div>

      <div className="flex justify-between">
        <button>Add</button>
        <BackBtn>&larr; Back</BackBtn>
      </div>
    </form>
  );
}

export default Form;
