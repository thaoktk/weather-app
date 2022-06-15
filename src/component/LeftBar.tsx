import { IoLocationOutline } from "react-icons/io5";
import { RiCelsiusLine } from "react-icons/ri";
import background_day from "../image/image-bg.png";
import background_night from "../image/night-sea.jpg";
import { CurrentWeatherInDay, Forecast } from "../hooks/useForecast";
import moment from "moment";

interface LeftBarInterface {
  curWeather: CurrentWeatherInDay;
  forecast: Forecast;
}

const urlIcon = "http://openweathermap.org/img/wn/";

function LeftBar({ curWeather, forecast }: LeftBarInterface) {
  const detailWeather = curWeather.weather[0];

  const hour = parseInt(moment(new Date().getTime()).format("HH"));
  let img_src = undefined;
  if (hour >= 17 || hour <= 5) {
    img_src = background_night;
  } else {
    img_src = background_day;
  }

  return (
    <div className="rounded-lg relative w-full lg:flex-1 flex-[2_2_0%] appear">
      <div className="w-full h-full">
        <img
          src={img_src}
          alt=""
          className="w-full h-full rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute top-0 left-0 w-full py-10">
        <div className="text-4xl text-white font-bold text-center">
          {moment(forecast.list[2].dt_txt).format("dddd")}
        </div>
        <div className="text-2xl text-white font-medium text-center mt-3">
          {moment(forecast.list[2].dt_txt).format("MMM Do")}
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 ">
          <IoLocationOutline className="text-2xl text-white" />
          <span className="text-2xl text-white text-center">
            {forecast.city.name + ", " + forecast.city.country}
          </span>
        </div>
        <div className="flex justify-center lg:mt-16 mt-10">
          <img
            src={urlIcon + detailWeather.icon + `@4x.png`}
            alt=""
            className="w-[200px] h-[200px]"
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <span className="text-3xl text-white font-bold">
            {curWeather.main.temp.toFixed()}
          </span>
          <RiCelsiusLine className="text-3xl text-white" />
        </div>
        <div className="text-3xl text-white text-center mt-3">
          {detailWeather.description.charAt(0).toUpperCase() +
            detailWeather.description.slice(1)}
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
