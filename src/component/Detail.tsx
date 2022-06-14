import { RiCelsiusLine } from "react-icons/ri";
import { Forecast } from "../hooks/useForecast";

interface DetailInterface {
  forecast: Forecast;
}

function Detail({ forecast }: DetailInterface) {
  return (
    <div className="">
      <div className="flex justify-between items-center appear">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme ">
          Cloudiness
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {forecast.list[2].clouds.all + "%"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Humidity
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {forecast.list[2].main.humidity + "%"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Wind
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          {forecast.list[2].wind.speed + "m/s"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Feels like
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {forecast.list[2].main.feels_like.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Max temp
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {forecast.list[2].main.temp_max.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-2xl dark:text-white text-slate-800 transition-theme">
          Min temp
        </span>
        <span className="text-2xl dark:text-white text-slate-800 transition-theme flex items-center">
          {forecast.list[2].main.temp_min.toFixed()}
          <RiCelsiusLine className="text-2xl dark:text-white text-slate-800 transition-theme" />
        </span>
      </div>
    </div>
  );
}

export default Detail;
