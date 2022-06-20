import { useState } from "react";
import axios from "axios";

const BASE_URL_FORECAST =
  "https://api.openweathermap.org/data/2.5/forecast?appid=4b0d7648a4da70e2a141e7aa512b54af&cnt=5&units=metric";

const BASE_URL_CURR =
  "https://api.openweathermap.org/data/2.5/weather?appid=4b0d7648a4da70e2a141e7aa512b54af&units=metric";

export interface Forecast {
  list: {
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
    dt_txt: string;
  }[];
  city: {
    name: string;
    country: string;
  };
}

export interface CurrentWeatherInDay {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
}

const useForecast = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherInDay | undefined
  >(undefined);
  const [forecast, setForecast] = useState<Forecast | undefined>(undefined);

  const submitRequest = async (location: string) => {
    try {
      if (location) {
        const resForecast = await axios.get(
          BASE_URL_FORECAST + `&q=${location}`
        );
        const resCurrWeather = await axios.get(
          BASE_URL_CURR + `&q=${location}`
        );
        setIsError(false);
        setCurrentWeather(resCurrWeather.data);
        setForecast(resForecast.data);
      }
    } catch (e) {
      setIsError(true);
      setForecast(undefined);
      setCurrentWeather(undefined);
      return;
    }
  };

  return {
    isError,
    forecast,
    currentWeather,
    submitRequest,
    setIsError,
    setForecast,
    setCurrentWeather,
  };
};

export default useForecast;
