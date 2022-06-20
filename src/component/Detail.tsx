import { RiCelsiusLine } from "react-icons/ri";
import { CurrentWeatherInDay } from "../context/useForecast";

interface DetailInterface {
  curWeather: CurrentWeatherInDay;
}

function Detail({ curWeather }: DetailInterface) {
  return (
    <div className="">
      <div className="flex justify-between items-center appear">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme ">
          Cloudiness
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {curWeather.clouds.all + "%"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Humidity
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {curWeather.main.humidity + "%"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Wind
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {curWeather.wind.speed + "m/s"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Feels like
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {curWeather.main.feels_like.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Max temp
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {curWeather.main.temp_max.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Min temp
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {curWeather.main.temp_min.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
    </div>
  );
}

export default Detail;
