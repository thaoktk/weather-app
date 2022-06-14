import { useCallback, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/forecast?appid=4b0d7648a4da70e2a141e7aa512b54af&cnt=5&units=metric";

export interface Forecast {
  list: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
  city: {
    name: string;
    country: string;
  };
}

const useForecast = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [forecast, setForecast] = useState<Forecast | undefined>(undefined);

  const submitRequest = async (location: string) => {
    try {
      if (location) {
        const res = await axios.get(BASE_URL + `&q=${location}`);
        if (res) {
          setIsError(false);
          setForecast(res.data);
        }
      }
    } catch (e) {
      setIsError(true);
      setForecast(undefined);
      return;
    }
  };

  return {
    isError,
    forecast,
    submitRequest,
    setIsError,
    setForecast,
  };
};

export default useForecast;
