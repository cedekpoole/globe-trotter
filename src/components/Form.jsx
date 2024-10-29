import { useState } from "react";
import BackBtn from "./BackBtn";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [notes, setNotes] = useState("");

  return (
    <form className="flex flex-col gap-4 bg-[#302e2e] rounded-lg p-4 shadow-md">
      <div className="flex flex-col gap-2">
        <label htmlFor="cityName" className="font-light">
          CITY NAME
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="p-1 rounded"
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="font-light">
          WHEN DID YOU GO?
        </label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="p-1 rounded"
        />
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
        <button onClick={(e) => e.preventDefault()}>Add</button>
        <BackBtn>&larr; Back</BackBtn>
      </div>
    </form>
  );
}

export default Form;
