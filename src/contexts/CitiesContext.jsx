import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// jsonbin.io base URL for your bin (update this with your bin ID)
const BASE_URL = `${import.meta.env.VITE_JSON_BIN_BASE_URL}`;
const API_KEY = import.meta.env.VITE_JSON_BIN_API_KEY;

const CitiesContext = createContext();

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const initialState = {
  cities: [],
  isLoading: true,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "city/loaded":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
      };
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "city/reset":
      return {
        ...state,
        currentCity: {},
      };
    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}`, {
          headers: {
            "X-Master-Key": API_KEY,
          },
        });
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data.record.cities });
      } catch {
        dispatch({ type: "rejected", payload: "Failed to fetch cities" });
      }
    }
    fetchCities();
  }, []);

  async function getCityByID(id) {
    dispatch({ type: "loading" });
    try {
      const city = cities.find((city) => city.id === id);
      if (city) {
        dispatch({ type: "city/loaded", payload: city });
      } else {
        throw new Error("City not found");
      }
    } catch {
      dispatch({ type: "rejected", payload: "Failed to fetch city" });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const updatedCities = [...cities, newCity];
      const res = await fetch(`${BASE_URL}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ cities: updatedCities }),
      });
      await res.json();
      dispatch({ type: "city/created", payload: newCity });
    } catch {
      dispatch({ type: "rejected", payload: "Failed to create city" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const updatedCities = cities.filter((city) => city.id !== id);
      await fetch(`${BASE_URL}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({ cities: updatedCities }),
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "Failed to delete city" });
    }
  }

  function clearCurrentCity() {
    dispatch({ type: "city/reset" });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCityByID,
        createCity,
        deleteCity,
        clearCurrentCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
